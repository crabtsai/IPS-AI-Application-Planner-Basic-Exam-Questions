# IPAS GitHub Pages 設定分離版

## 檔案結構

```text
/
├─ index.html
├─ config.js
└─ firebase-config.js
```

三個檔案請放在 GitHub Pages 儲存庫的同一層。

## 已完成修改

1. Google Sheet 的 `sheetId`、`gid` 已移到 `config.js`。
2. 總分、及格分數、預設題數已移到 `config.js`。
3. 題數改為下拉式選單：10、20、30……100 題。
4. 預設選擇 20 題。
5. 若目前勾選的範圍題數不足，超過可用題數的選項會自動停用。
6. 若勾選範圍總共少於 10 題，會顯示「全部可用（X 題）」作為備援，避免無法開始。
7. 新增 `firebase-config.js` 範本；原始程式沒有 Firebase SDK／初始化程式，因此未擅自填入專案資料。

## 更換 Google Sheet

只需修改 `config.js`：

```js
googleSheet: {
  sheetId: "你的 Google Sheet ID",
  gid: "工作表 gid"
}
```

## 修改題數選項

修改 `config.js`：

```js
defaultQuestionCount: 20,
questionCountOptions: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
```

## Firebase 注意事項

Firebase Web App 的一般前端組態可放在獨立 JS 檔，但 GitHub Pages 上的所有檔案都能被瀏覽器讀取，因此「拆檔不等於隱藏」。資料存取安全仍要依靠 Firebase Authentication、Firestore／Storage Security Rules、API key restrictions 與視需求啟用 App Check。

不可上傳：

- Service Account JSON
- 私鑰或管理員憑證
- LINE Channel Access Token
- Cloud Functions／第三方服務的伺服器密鑰
- 任何能直接繞過 Security Rules 的敏感憑證
