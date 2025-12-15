/* --- Завдання 1: Ромб із цифр --- */
console.log("--- Завдання 1 ---");

let n = prompt("Завдання 1. Введіть розмір ромба n (наприклад, 3):");
n = parseInt(n);

if (!isNaN(n) && n > 0) {
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let s = 0; s < n - i; s++) line += " "; // пробіли
        for (let j = 1; j <= i; j++) line += j;      // цифри вгору
        for (let k = i - 1; k >= 1; k--) line += k;  // цифри вниз
        console.log(line);
    }

    for (let i = n - 1; i >= 1; i--) {
        let line = "";
        for (let s = 0; s < n - i; s++) line += " "; // пробіли
        for (let j = 1; j <= i; j++) line += j;      // цифри вгору
        for (let k = i - 1; k >= 1; k--) line += k;  // цифри вниз
        console.log(line);
    }
} else {
    console.log("Введено некоректне число для ромба.");
}


/* --- Завдання 2: Сума ряду --- */
console.log("--- Завдання 2 ---");

let k = prompt("Завдання 2. Введіть n для суми ряду:");
k = parseInt(k);

if (!isNaN(k) && k > 0) {
    let sum = 0;
    for (let i = 1; i <= k; i++) {
        sum += 1 / i;
    }
    console.log(`Сума ряду для n=${k} дорівнює: ${sum}`);
} else {
    console.log("Введено некоректне число для ряду.");
}


/* --- Завдання 3: Гра "Вгадай число" --- */
console.log("--- Завдання 3 ---");

const target = Math.floor(Math.random() * 100) + 1;
let guess;

while (true) {
    let input = prompt("Завдання 3. Вгадайте число від 1 до 100 (Cancel для виходу):");
    
    if (input === null) {
        console.log("Гру скасовано.");
        break;
    }

    guess = parseInt(input);

    if (guess === target) {
        alert(`Ви вгадали! Число було ${target}.`);
        console.log(`Перемога! Вгадано число ${target}.`);
        break;
    } else if (guess < target) {
        alert("Загадане число більше.");
    } else if (guess > target) {
        alert("Загадане число менше.");
    }
}