/*
Клас Product
назва, ціна, категорія
*/
class Product {
constructor(name, price, category) {
this.name = name;
this.price = price;
this.category = category;
}
}


/*
Клас User
ім'я, метод отримання інформації
*/
class User {
constructor(name) {
this.name = name;
}


getInfo() {
console.log(`Користувач: ${this.name}`);
}
}

/*
Клас Customer (наслідується від User)
список замовлень, додавання та перегляд
*/
class Customer extends User {
constructor(name) {
super(name);
this.orders = [];
}


addOrder(order) {
this.orders.push(order);
}


viewOrders() {
console.log(`Замовлення покупця: ${this.name}`);
this.orders.forEach((order, index) => {
console.log(`Замовлення #${index + 1}, Сума: ${order.totalSum}`);
order.products.forEach(product => {
console.log(`- ${product.name} (${product.category}) : ${product.price} грн`);
});
});
}
}


/*
Клас Order
список продуктів, загальна сума
*/
class Order {
constructor() {
this.products = [];
this.totalSum = 0;
}


addProduct(product) {
this.products.push(product);
this.totalSum += product.price;
}
}


/*
ТЕСТУВАННЯ РОБОТИ ПРОГРАМИ
*/

const product1 = new Product("Телефон", 20000, "Техніка");
const product2 = new Product("Навушники", 2500, "Аксесуари");

const order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);

const customer = new Customer("Олег");

customer.addOrder(order1);

customer.getInfo();
customer.viewOrders();