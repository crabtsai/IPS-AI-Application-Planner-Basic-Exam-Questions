# IPAS 初級模擬考｜Firebase 降低讀取數＋題數下拉選單＋設定分離版

將以下三個檔案放在 GitHub Pages 儲存庫同一層：

```text
/index.html
/config.js
/firebase-config.js
```

## 修改位置

- Google Sheet、GID、總分、及格分數、預設題數、10～100 題選項、虛擬登入網域：`config.js`
- Firebase Web App 組態：`firebase-config.js`
- 頁面與 Firebase 功能：`index.html`

## 已保留的讀取優化

- 會員統計優先讀取 `users/{uid}/stats/main`
- 會員統計使用記憶體 TTL 快取
- 數量統計使用 Firestore `count()` 聚合
- 排行榜只讀前 30 名及自己的紀錄
- 錯題以 batch 與 increment 寫入，不逐題先讀舊文件
- 已練題號於同一登入工作階段使用記憶體快取

題數下拉選單與範圍切換只操作已載入的前端陣列，不會因切換選項而新增 Firestore 讀取。
