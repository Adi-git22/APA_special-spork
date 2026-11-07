
const targetDate = new Date("2026-12-02T20:00:00+05:30").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown() {
  const distance = targetDate - Date.now();

  if (distance <= 0) {
    countdown.innerHTML = `
      <div><strong>It's</strong><span>THE DAY</span></div>
      <div><strong>time</strong><span>TO CELEBRATE</span></div>
    `;
    return;
  }

  const units = [
    Math.floor(distance / 86400000),
    Math.floor((distance % 86400000) / 3600000),
    Math.floor((distance % 3600000) / 60000),
    Math.floor((distance % 60000) / 1000)
  ];

  countdown.querySelectorAll("strong").forEach((el, i) => {
    el.textContent = String(units[i]).padStart(2, "0");
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =====================================
   PARINAYA - TEMPLE DOOR INTRO
===================================== */

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("templeIntro");

  if (!intro) return;

  // Allow guests to see the temple entrance
  setTimeout(() => {
    intro.classList.add("is-opening");
  }, 2500);

  // Fade away after the doors open
  setTimeout(() => {
    intro.classList.add("is-hidden");
  }, 5700);

  // Remove the intro from the screen
  setTimeout(() => {
    intro.remove();
  }, 7200);
});
