let flag = 1;
let allert = 1;

const stage = document.getElementById("stage");
const Bn = document.getElementById("Bn");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");


// =============================
// GOOGLE FORMS NOTIFICATION
// =============================

function notifyYesWithGoogleForm() {

  // wysyłaj tylko raz z danego urządzenia
  if (localStorage.getItem("valentine_yes_sent") === "1") return;
  localStorage.setItem("valentine_yes_sent", "1");

  const FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLScwN2b3o3ssd3BEFxWA3uY20IFzNRv-31twRun9BcFSqmCE7A/formResponse";

  const formData = new FormData();

  const now = new Date().toISOString();

  // pierwsze pole
  formData.append("entry.83020380", "Klik TAK 💘");

  // drugie pole - np data + przeglądarka
  formData.append("entry.2026786856", `Czas: ${now} | UA: ${navigator.userAgent}`);

  fetch(FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    body: formData
  }).catch(()=>{});
}


// =============================
// UCIEKAJĄCY PRZYCISK NIE
// =============================

const positions = [
  { top: 0.10, left: 0.55 },
  { top: 0.10, left: 0.05 },
  { top: 0.62, left: 0.38 },
  { top: 0.12, left: 0.68 },
  { top: 0.62, left: 0.22 },
  { top: 0.56, left: 0.62 },
  { top: 0.28, left: 0.58 }
];

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function placeNo(index) {

  const rectStage = stage.getBoundingClientRect();
  const rectBn = Bn.getBoundingClientRect();

  const maxLeft = rectStage.width - rectBn.width;
  const maxTop = rectStage.height - rectBn.height;

  const pos = positions[index];

  const leftPx = clamp(pos.left * rectStage.width, 0, maxLeft);
  const topPx  = clamp(pos.top  * rectStage.height, 0, maxTop);

  Bn.style.left = `${leftPx}px`;
  Bn.style.top  = `${topPx}px`;
}

function f() {

  if (flag === 1) { placeNo(0); flag = 2; }
  else if (flag === 2) { placeNo(1); flag = 3; }
  else if (flag === 3) { placeNo(2); flag = 4; }
  else if (flag === 4) { placeNo(3); flag = 5; }
  else if (flag === 5) { placeNo(4); flag = 6; }
  else if (flag === 6) { placeNo(5); flag = 7; }
  else if (flag === 7) { placeNo(6); flag = 1; }
}


// =============================
// PRZYCISK TAK
// =============================

function f1() {

  // 🔥 wysyła info do Google Forms
  notifyYesWithGoogleForm();

  const msgs = [
    "Ojej! 💘 Czyli oficjalnie jesteś moją walentynką! 😍",
    "Yaaay! 🥰 Wiedziałem! Walentynki uratowane 💜",
    "Serce mówi TAK! 💞 Nie ma już odwrotu 😄"
  ];

  alert(msgs[allert - 1]);

  allert += 1;
  if (allert > 3) allert = 1;
}


// =============================
// EVENTS
// =============================

noBtn.addEventListener("pointerenter", f);

noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  f();
});

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  f();
}, { passive: false });

yesBtn.addEventListener("click", f1);

window.addEventListener("resize", () => {
  const currentIndex = (flag === 1) ? 6 : (flag - 2);
  placeNo(clamp(currentIndex, 0, positions.length - 1));
});

placeNo(6);