@echo off
echo ========================================
echo   Clearing Cache and Restarting Server
echo ========================================
echo.

echo Step 1: Cleaning build artifacts...
if exist dist rmdir /s /q dist
if exist node_modules\.vite rmdir /s /q node_modules\.vite

echo.
echo Step 2: Starting development server...
echo.
echo IMPORTANT: After server starts:
echo 1. Open browser in Incognito/Private mode
echo 2. OR press Ctrl+Shift+R to hard refresh
echo 3. The purple theme will now be visible!
echo.

npm run dev
