// ─────────────────────────────────────────────────────────────────
// SPENDING APP — Google Apps Script Backend
// ─────────────────────────────────────────────────────────────────
// HOW TO DEPLOY:
//  1. Go to https://script.google.com → New Project
//  2. Delete everything and paste this entire file
//  3. Click "Deploy" → "New deployment"
//  4. Type: Web App
//  5. Execute as: Me
//  6. Who has access: Anyone
//  7. Click Deploy → copy the Web App URL
//  8. Paste that URL into the app's Sync settings
// ─────────────────────────────────────────────────────────────────

const SHEET_NAME = 'spending_data';

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.getRange('A1').setValue('{}');
  }
  return sheet;
}

function doGet(e) {
  try {
    const sheet = getOrCreateSheet();
    const raw = sheet.getRange('A1').getValue();
    const data = raw ? raw : '{}';
    return ContentService
      .createTextOutput(data)
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const sheet = getOrCreateSheet();
    const incoming = JSON.parse(e.parameter.data || '{}');
    const existingRaw = sheet.getRange('A1').getValue();
    const existing = existingRaw ? JSON.parse(existingRaw) : {};

    // Last-write-wins based on lastModified timestamp
    const incomingTime = incoming.lastModified || 0;
    const existingTime = existing.lastModified || 0;

    if (incomingTime >= existingTime) {
      sheet.getRange('A1').setValue(JSON.stringify(incoming));
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'saved', lastModified: incomingTime }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      // Cloud is newer — return existing so client can update
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'conflict', data: existing }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
