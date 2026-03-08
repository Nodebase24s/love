const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const answer = document.querySelector('#answer');
const memoryBtn = document.querySelector('#memoryBtn');
const memoryText = document.querySelector('#memoryText');
const letterBtn = document.querySelector('#letterBtn');
const letterText = document.querySelector('#letterText');
const todayDate = document.querySelector('#todayDate');

const sweetLines = [
  'Mit dir wirken normale Momente besonders.',
  'Wenn ich dir schreibe, muss ich immer lächeln.',
  'Du gibst mir dieses ruhige, gute Gefühl von Zuhause.',
  'Ich mag nicht nur deine schöne Seite, sondern alles an dir.'
];

todayDate.textContent = new Date().toLocaleDateString('de-DE', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

function showAnswer(text) {
  answer.hidden = false;
  answer.textContent = text;
}

memoryBtn.addEventListener('click', () => {
  const line = sweetLines[Math.floor(Math.random() * sweetLines.length)];
  memoryText.hidden = false;
  memoryText.textContent = line;
});

letterBtn.addEventListener('click', () => {
  const hidden = letterText.hidden;
  letterText.hidden = !hidden;
  letterBtn.textContent = hidden ? 'Brief schließen' : 'Brief öffnen';
});

function createHeartRain() {
  for (let i = 0; i < 24; i += 1) {
    const el = document.createElement('span');
    el.className = 'heart';
    el.textContent = i % 2 === 0 ? '❤' : '💕';
    el.style.left = `${Math.random() * 100}vw`;
    el.style.animationDuration = `${3 + Math.random() * 2}s`;
    el.style.opacity = `${0.45 + Math.random() * 0.5}`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5200);
  }
}

yesBtn.addEventListener('click', () => {
  showAnswer('Jaaaa! Das macht mich überglücklich. Ich hab dich sehr lieb, Lilja.');
  createHeartRain();
  yesBtn.disabled = true;
  noBtn.hidden = true;
});

let dodgeCount = 0;
noBtn.addEventListener('mouseenter', () => {
  dodgeCount += 1;
  const offsetX = Math.random() * 120 - 60;
  const offsetY = Math.random() * 90 - 45;
  noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

  if (dodgeCount > 3) {
    noBtn.textContent = 'Sicher?';
  }
  if (dodgeCount > 7) {
    noBtn.textContent = 'Vielleicht doch Ja?';
  }
});

noBtn.addEventListener('click', () => {
  showAnswer('Ich bleibe dabei: Du bist meine wichtigste Frage.');
});
