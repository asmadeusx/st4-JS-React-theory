'use strict';

// 021 - Массивы и псевдомассивы

const arr = [5, 22, 36, 16, 28];



// arr.pop(); // Удаляет последний элемент массива
// arr.push(10); // Добавляет в конец массива элемент

// for (let i = 0; i  < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', '); // Разделить строку на элементы массива используя указанный разделитель
// console.log(products.join('; ')); // обратное Split. Преобразовать массив, 
// и все ее элементы собирает в строку применяя указанный разделитель.
// products.sort(); // Сортировка элементов массива. По умолчанию в Алфавитном порядке. 
// Сортируется как СТРОКИ. т.е. 1, 5, 11, 21 в результате будет 1, 11, 21, 5.

function compareNum(a, b) {
    return a - b;
}

arr.sort(compareNum);
console.log(arr);