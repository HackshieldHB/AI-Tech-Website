AITech VPS Deployment Steps (Ubuntu, no nginx)
===============================================

Goal
----
Deploy and run:
- Next.js on internal port 3000 (public via domain on port 80 through iptables redirect)
- Streamlit on port 8501
- Domain:
  - http://aitech-ilt.co.id      -> Next.js (no port in URL)
  - http://aitech-ilt.co.id:8501 -> Streamlit


1) Connect to VPS and prepare system
------------------------------------
Run:
sudo -i
apt update -y
apt install -y curl git ufw dnsutils python3 python3-pip


2) Install Node.js 18+ (required by package.json engines)
---------------------------------------------------------
Run:
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt install -y nodejs
node -v
npm -v

Expected:
- node version is v18.x or newer


3) Upload project to VPS
------------------------
Project target path must be:
/root/Website

After upload, structure must be:
- /root/Website/website
- /root/Website/streamlit_app
- /root/Website/start_platform.sh
- /root/Website/stop_platform.sh
- /root/Website/setup_vps_network.sh
- /root/Website/setup_pm2_autostart.sh
- /root/Website/reset_pm2.sh
- /root/Website/aitech.service

Run:
cd /root/Website
ls -lah


4) Set executable permissions
-----------------------------
Run:
cd /root/Website
chmod +x start_platform.sh stop_platform.sh setup_vps_network.sh setup_pm2_autostart.sh reset_pm2.sh
sed -i 's/\r$//' start_platform.sh stop_platform.sh setup_vps_network.sh setup_pm2_autostart.sh reset_pm2.sh


5) Verify DNS points to your VPS IP
-----------------------------------
Run:
nslookup aitech-ilt.co.id
curl -4 ifconfig.me

Check:
- nslookup returned IP == your VPS public IP

If not same:
- create/update DNS A record:
  - Host: @
  - Type: A
  - Value: <YOUR_VPS_PUBLIC_IP>
- wait DNS propagation, then verify again with nslookup


6) Configure firewall + port redirect + persistence
---------------------------------------------------
Run:
cd /root/Website
./setup_vps_network.sh

This script will:
- open firewall ports 80, 3000, 8501
- enable UFW
- add iptables NAT redirect 80 -> 3000
- install iptables-persistent/netfilter-persistent
- save iptables rules for reboot persistence


7) First application start
--------------------------
Run:
cd /root/Website
./start_platform.sh

What it does:
- creates /root/Website/logs
- installs Node deps if missing
- builds Next.js if .next missing
- starts Next.js with nohup
- installs Python deps if missing
- starts Streamlit with nohup
- writes PID files to /tmp


8) Validate services are running
--------------------------------
Run:
ss -tulnp | grep 3000
ss -tulnp | grep 8501

Expected:
- one process listening on :3000 (Next.js)
- one process listening on :8501 (Streamlit)


9) Validate from local VPS
--------------------------
Run:
curl -I http://localhost:3000
curl -I http://localhost:8501
curl -I http://aitech-ilt.co.id

Expected:
- all commands return HTTP headers (200/301/302 acceptable)


10) Validate in browser
-----------------------
Open:
- http://aitech-ilt.co.id
- http://aitech-ilt.co.id:8501

Expected:
- domain without port loads Next.js site
- :8501 loads Streamlit app


11) Enable auto-start at boot with PM2 (recommended)
----------------------------------------------------
One-command setup:
cd /root/Website
./setup_pm2_autostart.sh

What this does:
- installs PM2 globally (if missing)
- registers start_platform.sh as PM2 app (aitech-platform)
- saves PM2 process list
- enables PM2 startup service (pm2-root) for reboot auto-start

Verify:
pm2 list
pm2 logs aitech-platform
systemctl status pm2-root --no-pager

If PM2 state is broken, run full reset:
cd /root/Website
./reset_pm2.sh


12) Stop/restart operations
---------------------------
Stop:
cd /root/Website
./stop_platform.sh

Start:
cd /root/Website
./start_platform.sh

PM2 restart (if enabled):
pm2 restart aitech-platform


13) Log checks if any issue appears
-----------------------------------
Run:
ls -lah /root/Website/logs
tail -n 100 /root/Website/logs/nextjs.log
tail -n 100 /root/Website/logs/streamlit.log


14) Quick troubleshooting checklist
-----------------------------------
If domain not opening:
- verify DNS (nslookup aitech-ilt.co.id)
- verify NAT rule:
  iptables -t nat -S PREROUTING | grep -- "--dport 80"
- verify firewall:
  ufw status
- verify Next.js alive:
  ss -tulnp | grep 3000

If Streamlit not opening:
- verify port:
  ss -tulnp | grep 8501
- verify logs:
  tail -n 100 /root/Website/logs/streamlit.log

If start script run twice:
- expected behavior: no duplicate process due to PID + running checks

If PM2 startup/autostart issue:
- run:
  cd /root/Website && ./reset_pm2.sh
- then verify:
  pm2 list
  systemctl status pm2-root --no-pager


15) Final success criteria
--------------------------
Deployment is successful if:
- ./start_platform.sh finishes without error
- http://aitech-ilt.co.id opens Next.js without port
- http://aitech-ilt.co.id:8501 opens Streamlit
- ss shows listeners on 3000 and 8501
- logs show no crash loop
- ./stop_platform.sh cleanly stops both services
