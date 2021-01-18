'use strict';

// 020 Объекты, деструктуризация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'blue',
        bg: 'red'
    },
    maketest: function() {
        console.log('test'); // Добавленный метод нашему объекту.
    }
};
// delete options.colors.border;
// console.log(options.colors);
// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) == 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log('Кол-во свойств в объекте: ' + counter);

// console.log(Object.keys(options)); //возвращает массив с перечнем имен всех ключей(элементов) в объекте
// console.log(Object.keys(options).length); //возвращает число всех ключей(элементов) в объекте

// options.maketest();

const {border, bg} = options.colors; // Деструктуризация объекта
console.log(border);