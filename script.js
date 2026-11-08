
/* =====================================
   PARINAYA - WEDDING COUNTDOWN
===================================== */

const targetDate = new Date("2026-12-02T20:00:00+05:30").getTime();

function initializeCountdown() {
  const countdown = document.getElementById("countdown");

  if (!countdown) return;

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
}

/* =====================================
   PARINAYA - CINEMATIC TEMPLE INTRO
===================================== */

function initializeTempleIntro() {
  const intro = document.getElementById("templeIntro");

  if (!intro) return;

  // Skip the extended intro for reduced-motion users
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    intro.remove();
    return;
  }

  // Phase 1: Let guests appreciate the closed temple doors
  setTimeout(() => {
    intro.classList.add("is-opening");
  }, 2200);

  // Phase 2: Allow doors and Ganesha reveal to finish
  setTimeout(() => {
    intro.classList.add("is-hidden");
  }, 8200);

  // Phase 3: Remove the intro after its fade-out
  setTimeout(() => {
    intro.remove();
  }, 9700);
}

/* =====================================
   INITIALIZE WEBSITE
===================================== */

function initializeParinaya() {
  initializeCountdown();
  initializeTempleIntro();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeParinaya);
} else {
  initializeParinaya();
}
