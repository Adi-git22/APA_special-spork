# Aditya & Parul — Wedding Invitation Website

A responsive, pastel Indian wedding invitation website with a countdown and RSVP form.

## Files
- `index.html` — invitation content and RSVP form
- `style.css` — responsive pastel/peach/gold design
- `script.js` — countdown and RSVP submission
- `google-apps-script.gs` — optional Google Sheets RSVP receiver

## 1. Preview locally
Open `index.html` in a browser. The invitation and countdown work immediately.
The RSVP form will show a setup note until you connect a Google Apps Script endpoint.

## 2. Publish free with GitHub Pages
1. Sign in at https://github.com and create a new **public** repository, e.g. `aditya-parul-wedding`.
2. Upload `index.html`, `style.css`, `script.js`, and this README (and the `.gs` file if you want).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait a minute and open the Pages URL shown there, usually `https://YOUR-USERNAME.github.io/aditya-parul-wedding/`.

## 3. Connect RSVP responses to Google Sheets (free)
1. Create a Google Sheet named `Wedding RSVPs`.
2. In the sheet, choose **Extensions → Apps Script**.
3. Replace the editor contents with the code in `google-apps-script.gs`, then Save.
4. Click **Deploy → New deployment**.
5. Select the gear icon / deployment type **Web app**.
6. Set **Execute as: Me** and **Who has access: Anyone**. Deploy and authorize it.
7. Copy the Web app URL ending in `/exec`.
8. Open `script.js` and replace the empty value in this line:
   `const RSVP_ENDPOINT = "";`
   with your URL, keeping the quotes, e.g. `const RSVP_ENDPOINT = "https://script.google.com/macros/s/....../exec";`
9. Upload the updated `script.js` to GitHub (or edit it directly in GitHub). Test one RSVP and check the spreadsheet.

**Privacy note:** Anyone with the invitation link can submit the form. Avoid collecting sensitive information. If you prefer not to make the Google Apps Script endpoint public, use a hosted form service with its own privacy and spam controls.

## 4. Personalize before sharing
- Confirm the venue's exact map pin and replace the Google Maps search link in `index.html` if you have a precise location.
- Add family names, ceremony details, dress code, travel notes, and contact details if desired.
- The current theme uses CSS illustrations and decorative motifs, not licensed wedding photographs.
- The page uses Google Fonts; a network connection is needed for those fonts. It falls back to system fonts if offline.

## Important RSVP note
The sample JavaScript uses `fetch` with `mode: "no-cors"` for the Apps Script web app. Browsers do not expose the response body in no-cors mode, so the on-page confirmation means the browser sent the request, not that a spreadsheet row was independently verified. Always test with a real submission and verify it appears in Google Sheets.
