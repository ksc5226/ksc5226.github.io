const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttons = document.getElementById("buttons");
const yay = document.getElementById("yay");
const img = document.getElementById("celebrateImg");
const hint = document.getElementById("hint");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* ---------- No button dodge ---------- */
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 260 - 130;
  const y = Math.random() * 160 - 80;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* ---------- Fireworks ---------- */
let particles = [];

function createFirework(x, y) {
  const count = 30;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = Math.random() * 4 + 2;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 60,
    });
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.05;
    p.life--;

    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 60%)`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fill();

    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animateFireworks);
}
animateFireworks();

/* ---------- Yes click ---------- */
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  hint.style.display = "none";
  yay.classList.remove("hidden");
  img.classList.remove("hidden");

  const rect = canvas.getBoundingClientRect();
  for (let i = 0; i < 5; i++) {
    createFirework(
      Math.random() * rect.width,
      Math.random() * rect.height * 0.5
    );
  }
});
