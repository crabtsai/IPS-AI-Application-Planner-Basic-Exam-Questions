// Firebase Web 前端組態檔
// 目前 index.html 尚未載入 Firebase SDK，也尚未呼叫 initializeApp。
// 後續若加入 Firebase 功能，可把 Firebase Console 提供的 Web App 組態貼到下方。
// 注意：絕對不要把 service account JSON、私鑰、管理員憑證或真正的伺服器密鑰放進 GitHub Pages。
window.FIREBASE_CONFIG = Object.freeze({
  apiKey: "請填入 Firebase Web API Key",
  authDomain: "請填入.firebaseapp.com",
  projectId: "請填入 projectId",
  storageBucket: "請填入 storageBucket",
  messagingSenderId: "請填入 messagingSenderId",
  appId: "請填入 appId"
});
