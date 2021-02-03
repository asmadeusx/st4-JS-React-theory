'use strict';

const now = new Date(); // Помещаем в переменную now - текущую дату


// Методы GET'еры. - Получение.
// '2021-02-03' - передача даты в виде строки
// now.getFullYear() - возвращает год.
// now.getMonth() - возвращает месяц, от 0 до 11.
// now.getDate() - возвращает текущий день месяца. от 1 до 31
// now.getDay() - возвращает текущий день недели. от 0 до 6. Воскресенье - 0.
// now.get### - их там много.
// now.getTimezoneOffse() - возвращает разницу часовых поясов в минутах. Текущий пояс с центральным.

// Методы SET'еры. - Установка.
// now.setHours(18) - устанавливает часы

now.setHours(18);
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} милисекунд`);