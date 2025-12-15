/* ЗАВДАННЯ 1 */
console.log("--- Task 1 ---");

console.log(a); // undefined
var a = 10;
// Пояснення: var "спливає" наверх, але без значення.

// console.log(b); // Помилка!
let b = 20;
// Пояснення: let не працює до свого оголошення.

// console.log(c); // Помилка!
const c = 30;
// Пояснення: const теж не працює до оголошення.


/* ЗАВДАННЯ 2 */
console.log("--- Task 2 ---");

function testScope() {
    if (true) {
        var x = 5;      // var ігнорує блоку if
        let y = 10;     // let живе тільки всередині if
        const z = 15;   // const живе тільки всередині if
    }
    console.log(x); // 5 (Доступна, бо var)
    // console.log(y); // Помилка! (Не видно за межами if)
    // console.log(z); // Помилка! (Не видно за межами if)
}
testScope();


/* ЗАВДАННЯ 3 */
console.log("--- Task 3 ---");

console.log(5 + "5");       // "55" -> Плюс склеює у рядок.
console.log("5" - 2);       // 3    -> Мінус перетворює на числа.
console.log(true + false);  // 1    -> true=1, false=0.
console.log(null + 1);      // 1    -> null стає 0.
console.log(undefined + 1); // NaN  -> undefined це не число.
console.log(0 == false);    // true -> 0 і false рівні за значенням.
console.log(0 === false);   // false -> різні типи (число і булеве).


/* ЗАВДАННЯ 4 */
console.log("--- Task 4 ---");

const person = {
    name: "John",
    age: 30
};

// Робимо об'єкт незмінним
Object.freeze(person);

person.age = 31;         // Не зміниться, бо заморожено
person.city = "New York"; // Не додасться, бо заморожено
console.log(person);     // { name: "John", age: 30 }

// person = { name: "Alice", age: 25 }; 
// Помилка! Змінну const не можна переприсвоїти повністю.


/* ЗАВДАННЯ 5 */
console.log("--- Task 5 ---");

function checkType(value) {
    return typeof value;
}

console.log(checkType(10));      // "number"
console.log(checkType("Hello")); // "string"
console.log(checkType(null));    // "object" (це відомий баг JS, null вважається об'єктом)