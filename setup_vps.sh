#!/bin/bash
set -euo pipefail

BASE_DIR="/root/Website"
WEBSITE_DIR="$BASE_DIR/website"
STREAMLIT_DIR="$BASE_DIR/streamlit_app"

if [ "$(id -u)" -ne 0 ]; then
  echo "Run as root: sudo ./setup_vps.sh"
  exit 1
fi

if ! command -v apt-get >/dev/null 2>&1; then
  echo "This setup script supports Ubuntu/Debian (apt-get)."
  exit 1
fi

if [ ! -d "$BASE_DIR" ] || [ ! -d "$WEBSITE_DIR" ] || [ ! -d "$STREAMLIT_DIR" ]; then
  echo "Project folders not found. Expected:"
  echo "- $WEBSITE_DIR"
  echo "- $STREAMLIT_DIR"
  exit 1
fi

echo "== 1/8 Install system packages =="
apt-get update -y
apt-get install -y curl git ufw dnsutils python3 python3-pip

echo "== 2/8 Install Node.js 20.x =="
if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

echo "== 3/8 Install PM2 globally =="
npm install -g pm2

echo "== 4/8 Normalize script line endings and permissions =="
cd "$BASE_DIR"
for f in start_platform.sh stop_platform.sh setup_vps_network.sh setup_pm2_autostart.sh reset_pm2.sh setup_vps.sh; do
  if [ -f "$f" ]; then
    sed -i 's/\r$//' "$f"
    chmod +x "$f"
  fi
done

echo "== 5/8 Install Next.js dependencies =="
cd "$WEBSITE_DIR"
if [ ! -d node_modules ]; then
  npm install --legacy-peer-deps
fi

echo "== 6/8 Build Next.js production bundle =="
npm run build

echo "== 7/8 Install Streamlit dependencies (PEP 668 safe) =="
cd "$STREAMLIT_DIR"
if [ ! -f requirements.txt ]; then
  echo "Missing requirements.txt in $STREAMLIT_DIR"
  exit 1
fi
python3 -m pip install -r requirements.txt --break-system-packages

echo "== 8/8 Configure firewall + NAT redirect persistence =="
cd "$BASE_DIR"
./setup_vps_network.sh

echo
echo "Setup complete."
echo "Next commands:"
echo "1) cd /root/Website && ./start_platform.sh"
echo "2) cd /root/Website && ./setup_pm2_autostart.sh   # optional autostart"
echo "3) cd /root/Website && ./stop_platform.sh          # when needed"
