'use strict';

// 026 - Динамическая типизация

// To String

// 1) Зарезервированый спец Объект - String

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) Конкатенация

console.log(typeof(5 + '')); // Конкатенация. Сложение Числа со строкой, преобразует результат в строку.

const num = 5;

console.log("https:/vk.com/catalog/" + num);

const fontSize = 26 + 'px'; // динамическая типизация.

// To Number

// 1) Зарезервированый спец Объект - Number

console.log(typeof(Number('4')));

// 2) Унарный Плюс

console.log(typeof(+'4'));

// 3) ParseInt

console.log(typeof(parseInt('15px', 10)));

// ВСЕ ВВОДИМЫЕ ПОЛЬЗОВАТЕЛЕМ ДАННЫЕ - СТРОКИ!

// to Boolean

// 1)

// Это всегда будет ЛОЖЬЮ :
// - 0 ноль
// - '' пустая строка
// - null
// - undefined
// - NaN
// Остальные элементы и объекты будут ИСТИНОЙ.

let switcher = null;
if (switcher) {
    console.log('working...');
} // ЛОЖь

    switcher = 1;
if (switcher) {
    console.log('working...');
} // ИСТИНА

// 2) Зарезервированый спец Объект - Boolean

console.log(typeof(Boolean('4')));

// 3) Два знака отрицания.

console.log(typeof(!!'4444'));