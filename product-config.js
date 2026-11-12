// Klassuno product-config.js — 產品專屬前端設定（由 Klassuno 開發者管理）
// ★ Core 更新時只替換 index.html，絕不覆蓋本檔、ProductConfig.gs、assets/。
// ★ 這裡只可放「公開、非機密」的資料：Apps Script 網頁應用程式網址（…/exec）。
//   密碼、SS_ID、授權資料等絕不可放在前端。品牌、Logo、主題色、用字、模組開關等設定
//   在後端 ProductConfig.gs，由系統自動載入（前端只作顯示，不作任何權限判斷）。
window.KT_PRODUCT = {
  API_URL: 'https://script.google.com/macros/s/AKfycbwlJZYlbwsueZbeRpg72iNisKA3OgT30tbwOTdBhY3p-AEegJHbNVTJwvbgriCznP3E/exec'
};
