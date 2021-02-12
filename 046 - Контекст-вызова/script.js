'use strict';

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`${this.name} приветсвует вас!`);
//     };
// }

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user3 = {
//     name: 'John',
// };
// Ручное присвоение
// sayName.call(user3, 'Smith');
// sayName.apply(user3, ['Smith']);

// // Создается Новая функция
// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция: this = windows, но если стоит 'use strict' то будет - undefined;
// 2) Контекст у методов объекта это будет сам объект.
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

// ==================================================================

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
    console.log(this);
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

// Стрелочная Функция полное написание с аргументом
// const doubleFull = (a) => {
//     return a * 2;
// };
// // Стрелочная Функция короткое написание с 1 аргументом
// const doubleShortArg = (a) => a * 2; 
// // Стрелочная Функция короткое написание с 1 аргументом
// const doubleShortArg2 = a => a * 2;

// console.log(doubleFull(2));
// console.log(doubleShortArg(2));
// console.log(doubleShortArg2(2));