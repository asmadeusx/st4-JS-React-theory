/* jshint -W033 */
"use strict";

// Function Declaration
// Можно сначала вызвать, а потом огласить и создать
function calc(a, b) {
    return (a + b);
}
console.log(calc(5, 5), + " " + calc(2, 8) );

// Function Expression
// Нельзя сначала вызвать, а потом огласить и создать.
const logger = function() {
    console.log('hello');
};
logger();

// Стрелочная функция
// Сокращенный вариант
const calc2 = (a, b) => a + b;
// Классический вариант
const calc3 = (a, b) => {
    console.log(a + ' ' + b)
};

calc3(2, 5)