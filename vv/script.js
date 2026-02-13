let flag = 1;
let allert = 1;

const stage = document.getElementById("stage");
const Bn = document.getElementById("Bn");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// 7 pozycji uciekania (w procentach sceny) – podobnie jak u Ciebie, tylko responsywnie
const positions = [
  { top: 0.10, left: 0.55 },
  { top: 0.10, left: 0.05 },
  { top: 0.62, left: 0.38 },
  { top: 0.12, left: 0.68 },
  { top: 0.62, left: 0.22 },
  { top: 0.56, left: 0.62 },
  { top: 0.28, left: 0.58 }, // powrót mniej więcej na start
];

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function placeNo(index) {
  const rectStage = stage.getBoundingClientRect();
  const rectBn = Bn.getBoundingClientRect();

  // ile miejsca mamy realnie (żeby nie wyjechać poza scenę)
  const maxLeft = rectStage.width - rectBn.width;
  const maxTop = rectStage.height - rectBn.height;

  const pos = positions[index];

  const leftPx = clamp(pos.left * rectStage.width, 0, maxLeft);
  const topPx  = clamp(pos.top  * rectStage.height, 0, maxTop);

  Bn.style.left = `${leftPx}px`;
  Bn.style.top  = `${topPx}px`;
}

function f() {
  // Twoje flagi 1..7 – bez zmiany “funkcjonalności”
  if (flag === 1) { placeNo(0); flag = 2; }
  else if (flag === 2) { placeNo(1); flag = 3; }
  else if (flag === 3) { placeNo(2); flag = 4; }
  else if (flag === 4) { placeNo(3); flag = 5; }
  else if (flag === 5) { placeNo(4); flag = 6; }
  else if (flag === 6) { placeNo(5); flag = 7; }
  else if (flag === 7) { placeNo(6); flag = 1; }
}

function f1() {
  // (opcjonalnie) tutaj możesz wywołać “powiadom mnie”, patrz sekcja 3
  // notifyYes();

  const msgs = [
    "Ojej! 💘 To teraz oficjalnie: jesteś moją walentynką! 😍",
    "Yaaay! 🥰 Wiedziałem/am! Walentynki będą piękne 💜",
    "Serce mówi TAK! 💞 Dziękuję — uśmiech nie zejdzie mi z twarzy 😄"
  ];

  alert(msgs[allert - 1]);
  allert += 1;
  if (allert > 3) allert = 1;
}

// Desktop: ucieczka na najechanie
noBtn.addEventListener("pointerenter", f);

// Mobile: ucieczka na dotyk / próbę kliknięcia
noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  f();
});

// Dodatkowo dla iOS (czasem pomaga)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  f();
}, { passive: false });

yesBtn.addEventListener("click", f1);

// Pilnujemy poprawnych pozycji po zmianie rozmiaru ekranu / obrocie telefonu
window.addEventListener("resize", () => {
  // ustaw w bieżącej “fazie” (żeby nie skakało losowo)
  const currentIndex = (flag === 1) ? 6 : (flag - 2);
  placeNo(clamp(currentIndex, 0, positions.length - 1));
});

// ustaw startową pozycję po załadowaniu
placeNo(6);
