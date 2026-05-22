import streamlit as st
import pandas as pd
import numpy as np
import time

st.set_page_config(
    page_title="AI Telecom Dashboard | AI Tech",
    page_icon="📡",
    layout="wide",
    initial_sidebar_state="expanded",
)

# Custom CSS for dark modern tech look
st.markdown("""
<style>
    .reportview-container {
        background: #0B0F19;
        color: #F8FAFC;
    }
    .sidebar .sidebar-content {
        background: #0f172a;
    }
    h1, h2, h3 {
        color: #06B6D4;
        font-family: 'Space Grotesk', sans-serif;
    }
    .stMetric {
        background-color: rgba(30,34,50,0.5);
        padding: 10px;
        border-radius: 8px;
        border: 1px solid rgba(255,255,255,0.1);
    }
</style>
""", unsafe_allow_html=True)

st.title("📡 AI Platform Operations Dashboard")
st.markdown("Live view of global telecom infrastructure telemetry powered by **AI Tech Infrastructure Lab**.")

# Sidebar Navigation
page = st.sidebar.radio("Navigation", ["Tower Health Dashboard", "Predictive Maintenance Analytics", "Fiber Rollout Progress", "Security Alerts"])

if page == "Tower Health Dashboard":
    st.header("Global Network Status")
    
    col1, col2, col3, col4 = st.columns(4)
    col1.metric("Total Towers", "12,450", "12 active")
    col2.metric("Online Towers", "12,204", "98.02%")
    col3.metric("Critical Alerts", "24", "-5 since yesterday", delta_color="inverse")
    col4.metric("Avg Health Score", "94.2/100", "+0.4")

    st.subheader("Live Telemetry Stream")
    
    # Generate mock tower data
    towers = pd.DataFrame({
        "Tower ID": [f"TOW-{np.random.randint(1000, 9999)}" for _ in range(10)],
        "Region": np.random.choice(["North America", "Europe", "Asia-Pacific", "LATAM"], 10),
        "Battery (%)": np.random.randint(40, 100, 10),
        "Signal Strength (dBm)": np.random.randint(-90, -50, 10),
        "AI Health Score": np.random.randint(60, 100, 10),
        "Status": np.random.choice(["Healthy", "Warning", "Critical"], 10, p=[0.7, 0.2, 0.1])
    })
    
    st.dataframe(towers.style.applymap(lambda x: 'color: red' if x == 'Critical' else ('color: orange' if x == 'Warning' else 'color: #06B6D4'), subset=['Status']))

elif page == "Predictive Maintenance Analytics":
    st.header("Predictive Hardware Degradation Models (LSTM / XGBoost)")
    
    st.markdown("Model: `LSTM_v4.2_Hardware_Failures`")
    
    # Generate mock time series data for 3 towers
    dates = pd.date_range(start="2024-01-01", periods=100)
    data = pd.DataFrame({
        "Tower A (Normal)": np.random.normal(90, 2, 100),
        "Tower B (Degrading)": np.linspace(95, 60, 100) + np.random.normal(0, 3, 100),
        "Tower C (Maintained)": np.concatenate([np.linspace(90, 65, 50), np.linspace(98, 95, 50)]) + np.random.normal(0, 2, 100)
    }, index=dates)

    st.line_chart(data)
    
    col1, col2 = st.columns(2)
    with col1:
        st.error("⚠️ Model predicts **Tower B** battery subsystem failure in 4.2 days. Recommended Action: Dispatch tech team immediately.")
    with col2:
        st.success("✅ **Tower C** shows 40% efficiency recovery post-maintenance intervention on Day 50.")

elif page == "Fiber Rollout Progress":
    st.header("Fiber Project Deployment Tracker")
    
    progress = 68
    st.progress(progress / 100)
    st.markdown(f"**Project Completion: {progress}%** (4,200km deployed / 6,100km total footprint)")
    
    # Mock contractor data
    contractors = pd.DataFrame({
        "Contractor Name": ["OpticBuild Inc", "NetVision Logistics", "FastFiber LLC"],
        "Assigned Route (km)": [1200, 2400, 2500],
        "Completed (km)": [1050, 1800, 1350],
        "AI Verified Quality": ["99.2%", "94.5%", "98.1%"],
        "Est. Completion": ["Oct 2024", "Jan 2025", "Feb 2025"]
    })
    st.table(contractors)
    
    st.info("ℹ️ AI Vision verification detected 14 instances of sub-optimal trenching depth by NetVision Logistics this week. Invoices automatically flagged.")

elif page == "Security Alerts":
    st.header("Edge AI Security Events (Smart CCTV Vision)")
    
    alert_1, alert_2, alert_3 = st.columns(3)
    
    alert_1.warning("Unauthorized Perimeter Breach\n\nSite: **Alpha-92**\nConfidence: **99%**\nTime: **14:22 UTC**")
    alert_2.error("Hardware Tampering Detected\n\nSite: **Gamma-14**\nConfidence: **95%**\nTime: **18:04 UTC**")
    alert_3.info("Drone Inspection Completed\n\nSite: **Delta-05**\nStatus: **No Rust Detected**\nTime: **09:15 UTC**")
    
    st.markdown("### Recent Event Log")
    log = pd.DataFrame({
        "Timestamp": pd.date_range("2024-05-18", periods=5, freq="H").strftime("%Y-%m-%d %H:%M"),
        "Site Node": ["Alpha-92", "Alpha-92", "Gamma-14", "Delta-05", "Beta-12"],
        "Event Type": ["Motion Detected", "Person Identified", "Vibration Spike", "Drone Launch", "Gate Opened"],
        "AI Action": ["Logged", "Alert Sent to Control", "Alarm Activated", "Route Active", "Logged"]
    })
    st.table(log)
