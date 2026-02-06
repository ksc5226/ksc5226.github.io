const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttons = document.getElementById("buttons");
const yay = document.getElementById("yay");
const img = document.getElementById("celebrateImg");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 260 - 130;
  const y = Math.random() * 160 - 80;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  yay.classList.remove("hidden");
  img.classList.remove("hidden");
});
