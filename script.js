document.addEventListener("DOMContentLoaded", () => {
  const colorDivs = document.querySelectorAll(".list2 div");
  const colorBtn = document.getElementById("colorBtn");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColors() {
    colorDivs.forEach(div => {
      div.style.backgroundColor = getRandomColor();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      event.preventDefault();
      changeColors();
    }
  });

  colorBtn.addEventListener("click", changeColors);
});
