const squareContainer = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    const squareBox = `<div class="square">${i}</div>`;
    const squareBox3 = `<div class="square square_3">Fizz</div>`;
    const squareBox5 = `<div class="square square_5">Buzz</div>`;
    const squareBox15 = `<div class="square square_15">FizzBuzz</div>`;

    if (i % 3 !== 0 && i % 5 !== 0) {
        squareContainer.innerHTML += squareBox;
    } else if (i % 3 == 0 && i % 5 !== 0) {
        squareContainer.innerHTML += squareBox3;
    } else if (i % 5 == 0 && i % 3 !== 0) {
        squareContainer.innerHTML += squareBox5;
    } else if (i % 3 == 0 && i % 5 == 0) {
        squareContainer.innerHTML += squareBox15;
    }
}
