@echo off
setlocal EnableDelayedExpansion

echo ========================================================
echo        AI Tech Infrastructure Lab - Platform Launcher      
echo ========================================================
echo.

:: STEP 1: Check Prerequisites
echo [1/4] Checking System Prerequisites...

:: Check Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed. 
    echo Please install Node.js from https://nodejs.org/ before running the platform.
    pause
    exit /b 1
)
echo [OK] Node.js is installed.

:: Check npm
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm is not installed. 
    echo Please install Node.js before running the platform.
    pause
    exit /b 1
)
echo [OK] npm is installed.

:: Check Python
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Python is not installed.
    echo Please install Python from https://www.python.org/ before running the platform.
    pause
    exit /b 1
)
echo [OK] Python is installed.

:: Check Streamlit
echo [OK] Streamlit check skipped per configuration.

echo.

:: STEP 2: Start Next.js Website
echo [2/4] Launching Next.js Website...
cd website

:: Check if required modules exist, if not run npm install
if not exist "node_modules\class-variance-authority\" (
    echo [INFO] Missing dependencies detected. Installing website dependencies...
    :: Using npm install with verbose output disabled for cleaner logs
    call npm install --no-fund --no-audit
    if !ERRORLEVEL! NEQ 0 (
        echo [ERROR] Failed to install npm dependencies.
        pause
        exit /b 1
    )
)

:: Start Next.js in a separate terminal window
start "AI Tech - Next.js Website" cmd /c "echo Starting Next.js... && npm run dev"
cd ..

echo.

:: STEP 3: Start Streamlit Dashboard
echo [3/4] Launching Streamlit AI Dashboard...
cd streamlit_app

:: Start Streamlit in a separate terminal window
start "AI Tech - Streamlit Dashboard" cmd /c "echo Starting Streamlit... && streamlit run app.py"
cd ..

echo.

:: STEP 4: Launch Browser
echo [4/4] Opening platform in browser...
echo Waiting 10 seconds for services to initialize...
timeout /t 10 /nobreak >nul

start http://localhost:3000

echo.
echo ========================================================
echo   Platform is running!
echo   Website:   http://localhost:3000
echo   Dashboard: http://localhost:8501
echo.
echo   To stop the platform, close the two terminal windows 
echo   or run stop_platform.bat
echo ========================================================
echo.
pause
