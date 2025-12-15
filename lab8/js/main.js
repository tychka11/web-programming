/* Завдання 1 */
console.log("--- Task 1 ---");

function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log("Сума від 1 до 5:", calculateSum(5)); 
console.log("Сума від 1 до 10:", calculateSum(10));


/* Завдання 2 */
console.log("--- Task 2 ---");

const multiply = function(a, b) {
    return a * b;
};

console.log("Множення 5 * 4:", multiply(5, 4));


/* Завдання 3 */
console.log("--- Task 3 ---");

const power = (a, b) => Math.pow(a, b);

console.log("2 в степені 3:", power(2, 3));
console.log("5 в степені 2:", power(5, 2));


/* Завдання 4 */
console.log("--- Task 4 ---");

function harmonicSeries(n) {
    if (n === 1) return 1;
    return (1 / n) + harmonicSeries(n - 1);
}

console.log("Сума ряду для n=3:", harmonicSeries(3));

/* Завдання 5 */
console.log("--- Task 5 ---");

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Подвоєння числа 5:", double(5));
console.log("Потроєння числа 5:", triple(5));


/* Завдання 6 */
console.log("--- Task 6 ---");

function applyFunction(value, func) {
    return func(value);
}

console.log("Подвоєння 10:", applyFunction(10, x => x * 2));
console.log("Квадрат 10:", applyFunction(10, x => x * x));


/* Завдання 7 */
console.log("--- Task 7 ---");

function processSet(set, callback) {
    set.forEach(callback);
}

const mySet = new Set([10, 20, 30]);

console.log("Елементи Set:");
processSet(mySet, (value) => {
    console.log(value);
});