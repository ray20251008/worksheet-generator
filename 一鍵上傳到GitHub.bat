@echo off
chcp 950 > nul
title 學習單產生器 - 一鍵上傳到 GitHub
echo ====================================================================
echo   學習單智慧產生器 - 一鍵上傳到 GitHub 智慧工具
echo ====================================================================
echo.

:: 檢查是否已經初始化過 git
if not exist .git (
    echo [系統提示] 偵測到尚未建立 Git 本地倉庫，正在初始化...
    git init
    git branch -M main
) else (
    echo [系統提示] 本地 Git 倉庫已建立，準備進行更新提交...
)

:: 建立/更新 .gitignore 排除備份檔與暫存檔
echo app.js.bak > .gitignore
echo *.bak >> .gitignore
echo search.py >> .gitignore
echo docx_text.txt >> .gitignore
echo sanitary_text.txt >> .gitignore
echo found_photo.txt >> .gitignore
echo found_photo_all.txt >> .gitignore
echo search_photo.py >> .gitignore
echo search_photo_all.py >> .gitignore
echo extract.py >> .gitignore
echo extract_sanitary.py >> .gitignore
echo append_css.py >> .gitignore
echo append_js.py >> .gitignore
echo write_bat_big5.py >> .gitignore

:: 新增所有檔案並提交
echo [系統提示] 正在整理檔案並儲存進度...
git add .
git commit -m "華聖家園瑞翔日間作業所學習單智慧產生器"

echo.
echo ====================================================================
echo   * 請前往您的 GitHub 網站，建立一個全新的 Repository (儲存庫)
echo   建立完成後，將其網址複製下來。
echo   (例如: https://github.com/您的帳號/專案名稱.git)
echo ====================================================================
echo.

set /p repo_url="* 請在這裡貼上您的 GitHub 儲存庫網址，然後按 Enter： "

if "%repo_url%"=="" (
    echo [錯誤] 網址不能為空！請重新開啟此程式。
    pause
    exit
)

:: 設定遠端儲存庫 (若已存在則先重設)
git remote remove origin >nul 2>nul
git remote add origin %repo_url%

echo.
echo [系統提示] 正在將檔案推送到 GitHub 雲端...
echo [系統提示] 這時候畫面可能會彈出 GitHub 登入視窗，請依照畫面完成登入授權即可！
echo.
git push -u origin main --force

echo.
echo ====================================================================
echo   * 上傳完成！您的學習單產生器檔案已成功推送到 GitHub 雲端！
echo.
echo   * 如何啟用線上「GitHub Pages」功能，讓大家可以直接在網頁上用？
echo   1. 請至您的 GitHub 專案頁面，點選右上角「Settings」(設定)
echo   2. 在左側選單點選「Pages」
echo   3. 在「Build and deployment -> Branch」下，選擇「main」分支，按「Save」
echo   4. 等待 1 分鐘後，上方會出現您的專屬線上學習單網址！
echo ====================================================================
echo.
pause
