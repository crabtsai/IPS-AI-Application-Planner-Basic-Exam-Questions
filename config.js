// GitHub Pages 前端公開設定檔
// 修改這個檔案即可更換題庫、分數門檻與題數選單，不需要再翻找 index.html。
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
  })
});
