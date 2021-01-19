'use strict';

// 023 - Основы ООПб прототипно-ориентированное наследование.

// let str = 'some',
//     strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

const soldier = {
    health: 350,
    armor: 200,
    sayHello: function() {
        console.log('Hello!');
    }
};

const john = Object.create(soldier); // Создание нового Объекта john, прототипом которого будет soldier

console.log(`john прототипом которого стал soldier имеет ${john.armor} брони и ${john.health} здоровья`);