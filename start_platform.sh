#!/bin/bash
set -euo pipefail

BASE_DIR="/root/Website"
NEXT_DIR="$BASE_DIR/website"
STREAMLIT_DIR="$BASE_DIR/streamlit_app"
LOG_DIR="$BASE_DIR/logs"

NEXT_PID_FILE="/tmp/aitech_nextjs.pid"
STREAMLIT_PID_FILE="/tmp/aitech_streamlit.pid"

NEXT_LOG="$LOG_DIR/nextjs.log"
STREAMLIT_LOG="$LOG_DIR/streamlit.log"

require_cmd() {
  local cmd="$1"
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "Missing required command: $cmd"
    if [ "$cmd" = "pip3" ]; then
      echo "Install it with: apt install -y python3-pip"
    fi
    exit 1
  fi
}

is_running() {
  local pid_file="$1"
  if [ -f "$pid_file" ]; then
    local pid
    pid="$(cat "$pid_file")"
    if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
      return 0
    fi
    rm -f "$pid_file"
  fi
  return 1
}

require_cmd npm
require_cmd python3
require_cmd pip3

if [ ! -d "$NEXT_DIR" ]; then
  echo "Next.js directory not found: $NEXT_DIR"
  exit 1
fi

if [ ! -d "$STREAMLIT_DIR" ]; then
  echo "Streamlit directory not found: $STREAMLIT_DIR"
  exit 1
fi

mkdir -p "$LOG_DIR"

cd "$NEXT_DIR"
if [ ! -d "node_modules" ]; then
  npm install --legacy-peer-deps
fi

if [ ! -d ".next" ]; then
  npm run build
fi

if ! is_running "$NEXT_PID_FILE"; then
  nohup npm start >> "$NEXT_LOG" 2>&1 &
  echo $! > "$NEXT_PID_FILE"
fi

cd "$STREAMLIT_DIR"
if [ ! -f "requirements.txt" ]; then
  echo "requirements.txt not found in $STREAMLIT_DIR"
  exit 1
fi

if ! python3 -c "import streamlit, pandas, numpy" >/dev/null 2>&1; then
  python3 -m pip install -r requirements.txt --break-system-packages
fi

if ! is_running "$STREAMLIT_PID_FILE"; then
  nohup python3 -m streamlit run app.py --server.port 8501 --server.address 0.0.0.0 >> "$STREAMLIT_LOG" 2>&1 &
  echo $! > "$STREAMLIT_PID_FILE"
fi

echo "Platform started. Next.js PID: $(cat "$NEXT_PID_FILE"), Streamlit PID: $(cat "$STREAMLIT_PID_FILE")"
