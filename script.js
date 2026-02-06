const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttons = document.getElementById("buttons");
const yay = document.getElementById("yay");
const img = document.getElementById("celebrateImg");
const hint = document.getElementById("hint");

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

/* ---------- Resize ---------- */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
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
  const count = 120; // 🔥 MUCH MORE
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 7 + 3;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 100,
      hue: Math.random() * 360,
      size: Math.random() * 3 + 2,
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

    ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.life / 100})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
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

  // 🔥 Burst MANY fireworks across screen
  for (let i = 0; i < 15; i++) {
    createFirework(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );
  }
});
