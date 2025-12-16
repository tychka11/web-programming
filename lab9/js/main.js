function Entity() {}

Entity.prototype.getInfo = function () {
    console.log(this);
};

function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}

Product.prototype = Object.create(Entity.prototype);
Product.prototype.constructor = Product;

function Order() {
    this.products = [];
    this.totalSum = 0;
}

Order.prototype = Object.create(Entity.prototype);
Order.prototype.constructor = Order;

Order.prototype.addProduct = function (product) {
    this.products.push(product);
    this.totalSum += product.price;
};

function Customer(name) {
    this.name = name;
    this.orders = [];
}

Customer.prototype = Object.create(Entity.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.addOrder = function (order) {
    this.orders.push(order);
};

Customer.prototype.viewOrders = function () {
    console.log(`Замовлення клієнта: ${this.name}`);
    this.orders.forEach((order, index) => {
        console.log(`Замовлення #${index + 1}, Сума: ${order.totalSum}`);
        order.products.forEach(product => {
            console.log(`- ${product.name} (${product.category}) : ${product.price} грн`);
        });
    });
};

const product1 = new Product("Ноутбук", 30000, "Техніка");
const product2 = new Product("Мишка", 500, "Аксесуари");

const order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);

const customer = new Customer("Іван");
customer.addOrder(order1);

customer.viewOrders();

product1.getInfo();
order1.getInfo();
customer.getInfo();
