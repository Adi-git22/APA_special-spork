// Google Apps Script: paste this into Extensions > Apps Script in your RSVP spreadsheet.
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RSVP") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("RSVP");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Submitted at", "Name", "Email", "Phone", "Guests", "Attendance", "Message"]);
  }

  const data = JSON.parse(e.postData.contents || "{}");
  sheet.appendRow([
    new Date(),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.guests || "",
    data.attendance || "",
    data.message || ""
  ]);

  return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
