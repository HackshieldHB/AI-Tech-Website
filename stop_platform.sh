#!/bin/bash
set -euo pipefail

NEXT_PID_FILE="/tmp/aitech_nextjs.pid"
STREAMLIT_PID_FILE="/tmp/aitech_streamlit.pid"

stop_from_pid_file() {
  local pid_file="$1"
  local service_name="$2"

  if [ -f "$pid_file" ]; then
    local pid
    pid="$(cat "$pid_file")"
    if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
      kill "$pid"
      echo "Stopped $service_name (PID $pid)"
    else
      echo "$service_name is not running, cleaning stale PID file"
    fi
    rm -f "$pid_file"
  else
    echo "No PID file for $service_name"
  fi
}

stop_from_pid_file "$NEXT_PID_FILE" "Next.js"
stop_from_pid_file "$STREAMLIT_PID_FILE" "Streamlit"

# Fail-safe: clean any lingering processes if PID files were stale/missing.
pkill -f "next start -p 3000" 2>/dev/null || true
pkill -f "next-server" 2>/dev/null || true
pkill -f "python3 -m streamlit run app.py" 2>/dev/null || true
pkill -f "streamlit run app.py" 2>/dev/null || true

rm -f "$NEXT_PID_FILE" "$STREAMLIT_PID_FILE"

echo "Platform stop check complete."
