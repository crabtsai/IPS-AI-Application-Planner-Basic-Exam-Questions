// GitHub Pages 公開前端設定檔
// 修改題庫、分數門檻、題數選單或虛擬登入網域時，只需調整此檔案。
window.APP_CONFIG = Object.freeze({
  googleSheet: Object.freeze({
    sheetId: "1EEBoG6cWlhsnrkstmQakv2ZNJ7TymplYewcX30E3Khw",
    gid: "0"
  }),

  exam: Object.freeze({
    totalScore: 100,
    passScore: 70,
    defaultQuestionCount: 20,
    questionCountOptions: Object.freeze([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
  }),

  auth: Object.freeze({
    // 使用者輸入 userName 時，底層會轉成 userName@ipas-exam.local 給 Firebase Auth 使用。
    emailDomain: "ipas-exam.local"
  })
});
