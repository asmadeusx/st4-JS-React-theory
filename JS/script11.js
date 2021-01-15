'use strict';

// 020 Объекты, деструктуризация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'blue',
        bg: 'red'
    }
};
// delete options.colors.border;
// console.log(options.colors);

for (let key in options) {
    if (typeof (options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}