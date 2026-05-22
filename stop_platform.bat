@echo off
echo ========================================================
echo        AI Tech Infrastructure Lab - Platform Stopper       
echo ========================================================
echo.
echo Stopping Next.js and Streamlit services...
echo.

:: Kill node processes (Next.js server)
echo [1/2] Terminating Node.js processes...
taskkill /F /IM node.exe /T >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Next.js stopped.
) else (
    echo [INFO] No Node.js processes found.
)

:: Kill python processes (Streamlit server)
echo [2/2] Terminating Python processes (Streamlit)...
taskkill /F /IM python.exe /T >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Streamlit stopped.
) else (
    echo [INFO] No Python processes found.
)

echo.
echo ========================================================
echo All AI Tech platform services have been stopped.
echo ========================================================
pause
