'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart'); // Возвращает все элементы которые попадают под условие поиска.
const oneheart = document.querySelector('.heart'); // Возвращает первый элемент который попадет под условие поиска.

box.style.cssText = ('background-color: green; width: 200px');

btns[1].style.backgroundColor = 'green';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

console.log(hearts);

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
}

// Вариант Николая Fargard'а Селезнева
// for (const heart of hearts) {
//     heart.style.backgroundColor = 'green';
// }     