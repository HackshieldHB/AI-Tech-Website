#!/bin/bash
set -euo pipefail

BASE_DIR="/root/Website"
START_SCRIPT="$BASE_DIR/start_platform.sh"
STOP_SCRIPT="$BASE_DIR/stop_platform.sh"
SETUP_SCRIPT="$BASE_DIR/setup_pm2_autostart.sh"
PM2_APP_NAME="aitech-platform"

if [ "$(id -u)" -ne 0 ]; then
  echo "Jalankan sebagai root: sudo ./reset_pm2.sh"
  exit 1
fi

if [ ! -f "$SETUP_SCRIPT" ]; then
  echo "File tidak ditemukan: $SETUP_SCRIPT"
  exit 1
fi

echo "== Normalize line endings =="
sed -i 's/\r$//' "$SETUP_SCRIPT" "$START_SCRIPT" "$STOP_SCRIPT" || true
chmod +x "$SETUP_SCRIPT" "$START_SCRIPT" "$STOP_SCRIPT" || true

echo "== Stop application services =="
"$STOP_SCRIPT" || true

echo "== Stop and clean PM2 state =="
if command -v pm2 >/dev/null 2>&1; then
  pm2 delete "$PM2_APP_NAME" >/dev/null 2>&1 || true
  pm2 delete all >/dev/null 2>&1 || true
  pm2 save --force >/dev/null 2>&1 || true
  pm2 kill >/dev/null 2>&1 || true
fi

echo "== Reset PM2 systemd unit (if exists) =="
systemctl stop pm2-root >/dev/null 2>&1 || true
systemctl disable pm2-root >/dev/null 2>&1 || true
rm -f /etc/systemd/system/pm2-root.service
systemctl daemon-reload

echo "== Re-setup PM2 autostart =="
"$SETUP_SCRIPT"

echo "== Done =="
echo "Cek status:"
echo "pm2 list"
echo "pm2 logs $PM2_APP_NAME"
