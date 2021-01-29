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

for (let i = 0; i < hearts; i++) {
    hearts[i].style.backgroundColor = 'green';
}
