// ─────────────────────────────────────────────────────────────────
// SPENDING APP — Google Apps Script Backend v2
// ─────────────────────────────────────────────────────────────────
// HOW TO DEPLOY:
//  1. Go to https://script.google.com → New Project
//  2. Delete everything and paste this entire file
//  3. Click "Deploy" → "New deployment" (or "Manage deployments" → edit existing)
//  4. Type: Web App
//  5. Execute as: Me
//  6. Who has access: Anyone (even anonymous)
//  7. Click Deploy → Authorize → copy the Web App URL
//  8. Paste that URL into the app's ☁️ Sync settings → Save
//
// NOTE: If you already deployed v1, click "Manage deployments" →
//       edit → change version to "New version" → Deploy.
//       Do NOT create a new deployment — use the same URL!
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

function makeResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// All traffic comes through doGet — both reads and writes.
// action=get  → return stored data
// action=set  → save incoming data (last-write-wins by timestamp)
function doGet(e) {
  try {
    const action = e.parameter.action || 'get';
    const sheet = getOrCreateSheet();

    if (action === 'get') {
      const raw = sheet.getRange('A1').getValue() || '{}';
      return makeResponse(JSON.parse(raw));
    }

    if (action === 'set') {
      const incoming = JSON.parse(decodeURIComponent(e.parameter.data || '{}'));
      const existingRaw = sheet.getRange('A1').getValue() || '{}';
      const existing = JSON.parse(existingRaw);

      const incomingTime = incoming.lastModified || 0;
      const existingTime = existing.lastModified || 0;

      if (incomingTime >= existingTime) {
        sheet.getRange('A1').setValue(JSON.stringify(incoming));
        return makeResponse({ status: 'saved', lastModified: incomingTime });
      } else {
        // Cloud is newer — return it so the client can update itself
        return makeResponse({ status: 'conflict', data: existing });
      }
    }

    return makeResponse({ error: 'Unknown action' });

  } catch (err) {
    return makeResponse({ error: err.toString() });
  }
}

// Keep doPost as fallback
function doPost(e) {
  return doGet(e);
}
