'use strict';

// 028 - Получение элементов со страницы.

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart'); // Возвращает все элементы которые попадают под условие поиска.

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneheart = document.querySelector('.heart'); // Возвращает первый элемент который попадет под условие поиска.

console.log(oneheart);