'use strict';

// 022 - Передача по ссылке или по значение. Spread оператор

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 6
// };

// const copy = obj; // Ссылка на изначальный объект.

// copy.a = 10; // Изменение по ссылке. Т.е. изменение основного значения.

// console.log(copy);
// console.log(obj);

// function copy(mainObj) { // Поверхностное копирование объекта. Без вложенных элементов.
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(numbers);
// console.log(newNumbers);


// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add)); // Добавление объектов в другой объект. Второй Аргумент добавляется в Первый.

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// // const newArray = oldArray; //ссылка на массив
// const newArray = oldArray.slice(); //копирование массива
// newArray[1] = 'f';
// console.log(oldArray);
// console.log(newArray);

const   video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress', 'livejournal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // ...- spread оператор

const array = ['a', 'b', 'c'];

const newAarray = [...array]; // клонирование объекта с помощью spread оператора

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};