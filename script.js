const squareContainer = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    const squareBox = `<div class="square">${i}</div>`;
    squareContainer.innerHTML += squareBox;
}