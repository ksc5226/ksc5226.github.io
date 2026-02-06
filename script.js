const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:40px;
      background:#f6c1d1;">
      💖 Yay! 💖
    </div>
  `;
});