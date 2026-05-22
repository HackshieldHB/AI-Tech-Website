#!/bin/bash
set -euo pipefail

BASE_DIR="/root/Website"
START_SCRIPT="$BASE_DIR/start_platform.sh"
STOP_SCRIPT="$BASE_DIR/stop_platform.sh"
PM2_APP_NAME="aitech-platform"

if [ "$(id -u)" -ne 0 ]; then
  echo "Jalankan sebagai root: sudo ./setup_pm2_autostart.sh"
  exit 1
fi

if [ ! -f "$START_SCRIPT" ]; then
  echo "File tidak ditemukan: $START_SCRIPT"
  exit 1
fi

if [ ! -f "$STOP_SCRIPT" ]; then
  echo "File tidak ditemukan: $STOP_SCRIPT"
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm tidak ditemukan. Install Node.js + npm dulu."
  exit 1
fi

echo "== Prepare scripts =="
sed -i 's/\r$//' "$START_SCRIPT" "$STOP_SCRIPT"
chmod +x "$START_SCRIPT" "$STOP_SCRIPT"

echo "== Install PM2 (global) =="
npm install -g pm2

echo "== Remove old PM2 app (if exists) =="
pm2 delete "$PM2_APP_NAME" >/dev/null 2>&1 || true

echo "== Register start script in PM2 =="
pm2 start "$START_SCRIPT" --name "$PM2_APP_NAME" --interpreter bash
pm2 save

echo "== Enable PM2 startup via systemd =="
pm2 startup systemd -u root --hp /root
systemctl enable pm2-root
systemctl restart pm2-root

echo "== PM2 status =="
pm2 list
echo
echo "Selesai. Gunakan perintah berikut untuk cek:"
echo "pm2 logs $PM2_APP_NAME"
echo "ss -tulnp | grep 3000"
echo "ss -tulnp | grep 8501"
