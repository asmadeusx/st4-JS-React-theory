'use strict';

// СТАНДАРТ ES5
// Функция Кноструктор
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`${this.name} приветсвует вас!`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользоватеь ${this.name} покинул нас!`);
};

const ivan = new User('Ivan', 28);
console.log(ivan);

const alex = new User('Alex', 38);
console.log(alex);


ivan.hello();
alex.hello();

ivan.exit();

// СТАНДАРТ ES6 - Классы

class User2 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`hello! ${this.name}`);
    }
    exit() {
        console.log(`${this.name} ушел`);
    }
}

const igor = new User2('igor', 14);
console.log('=======================================================');
console.log(igor);
console.log('=======================================================');
igor.hello();
igor.exit();