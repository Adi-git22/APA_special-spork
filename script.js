// Set your Google Apps Script web-app URL below after completing README setup.
const RSVP_ENDPOINT = "";

const targetDate = new Date("2026-12-02T20:00:00+05:30").getTime();
const countdown = document.getElementById("countdown");
function updateCountdown() {
  const distance = targetDate - Date.now();
  if (distance <= 0) {
    countdown.innerHTML = "<div><strong>It's</strong><span>THE DAY</span></div><div><strong>time</strong><span>TO CELEBRATE</span></div>";
    return;
  }
  const units = [
    Math.floor(distance / 86400000),
    Math.floor((distance % 86400000) / 3600000),
    Math.floor((distance % 3600000) / 60000),
    Math.floor((distance % 60000) / 1000)
  ];
  countdown.querySelectorAll("strong").forEach((el, i) => el.textContent = String(units[i]).padStart(2, "0"));
}
updateCountdown();
setInterval(updateCountdown, 1000);

const form = document.getElementById("rsvp-form");
const status = document.getElementById("form-status");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.textContent = "";
  if (!form.reportValidity()) return;
  if (!RSVP_ENDPOINT) {
    status.textContent = "Your form is ready. Follow the README to connect Google Sheets before collecting responses.";
    return;
  }
  const submit = form.querySelector("button[type=submit]");
  submit.disabled = true;
  submit.style.opacity = ".65";
  const data = Object.fromEntries(new FormData(form).entries());
  data.submittedAt = new Date().toISOString();
  try {
    await fetch(RSVP_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    status.textContent = "Thank you! Your response has been received.";
    form.reset();
  } catch (error) {
    status.textContent = "Something went wrong. Please try again or contact the hosts.";
  } finally {
    submit.disabled = false;
    submit.style.opacity = "1";
  }
});
