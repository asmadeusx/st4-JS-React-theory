/* jshint -W033 */
"use strict";

const str = 'hello world';
const arr = [1, 2, 3, 4, 5];

// Свойство length возвращает количество символов и/или элементов.
console.log(arr.length);

// Метод для преобразования значений строчной переменной в верхний регистр
console.log(str.toUpperCase());

// Метод для поиска индекса, т.е. с какого места начинается искомый элемент строки
const fruit = "some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));

// Метод поиска и выреза нужного элемента.
// Первый аргумент - с какого символа начать
// Второй аргумент - до какого символа считать, включая последний символ
// Счет СЛЕВА-НАПРАВО. Результат world.
const logg = "Hello world";
console.log(logg.slice(6, 11));
// Счет СПРАВО-НАЛЕВО. Результат Hello.
const loggrev = "Hello world";
console.log(loggrev.slice(-11, -6));

// Метод, который аналогичен Slice.
// Не поддерживает отрицательные значения.
console.log(logg.substring(6, 11));

// Метод, str.
// Первый аргумент - с какого символа начать
// Второй аргумент - сколько вырезать символов
// Результат world.
console.log(logg.substr(6, 5))


// Числовые методы.
const num = 12.2;
const test = '12.2px';

// Метод округления до целого.
console.log(Math.round(num));

// Метод преобразования числа в другую систему исчисления. Целое значение.
console.log(parseInt(test));

// Метод преобразования числа в другую систему исчисления. С плавающей точкой.
console.log(parseFloat(test));





