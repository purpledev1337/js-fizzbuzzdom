const squareContainer = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    const square = document.createElement('div');
    square.className = 'square';

    if (i % 3 !== 0 && i % 5 !== 0) {
        square.append(i);
    } else if (i % 3 == 0 && i % 5 !== 0) {
        square.append('fizz');
        square.classList.add('square_3');
    } else if (i % 5 == 0 && i % 3 !== 0) {
        square.append('buzz');
        square.classList.add('square_5');
    } else if (i % 3 == 0 && i % 5 == 0) {
        square.append('fizzbuzz');
        square.classList.add('square_15');
    }

    squareContainer.appendChild(square);
}
