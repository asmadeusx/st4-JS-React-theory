'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart'); // Возвращает все элементы которые попадают под условие поиска.
const oneheart = wrapper.querySelector('.heart'); // Возвращает первый элемент который попадет под условие поиска.

box.style.cssText = ('background-color: green; width: 200px');

btns[1].style.backgroundColor = 'green';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

console.log(hearts);

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

// Вариант Николая Fargard'а Селезнева
// for (const heart of hearts) {
//     heart.style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});
// const text = document.createTextNode('Hello World!');

const div = document.createElement('div');
div.classList.add('black');
// document.body.append(div);

wrapper.append(div); // Вставляет элемент В КОНЕЦ блока
// wrapper.appendChild(div); // Вставляет элемент В КОНЕЦ блока. УСТАРЕВШИЙ МЕТОД. НЕ ИСПОЛЬЗОВАТЬ.

// wrapper.prepend(div); // Вставляет элемент В НАЧАЛО блока

// hearts[1].before(div); // Вставляет элемент ПЕРЕД указаным блоком или элементом
// wrapper.insertBefore(div, hearts[0]); // Вставить элемент ПЕРЕД указанным элементом. УСТАРЕВШИЙ МЕТОД. НЕ ИСПОЛЬЗОВАТЬ.

// hearts[1].after(div); // Вставляет элемент ПОСЛЕ указаным блоком или элементом

// circles[0].remove(); // Удаляет указанный элемент.
// wrapper.removeChild(hearts[1]); // Удаляет указанный элемент. ПЕРЕД указанным элементом. УСТАРЕВШИЙ МЕТОД. НЕ ИСПОЛЬЗОВАТЬ.

// hearts[0].replaceWith(circles[0]); // Заменят элемент А элементом Б
// wrapper.replaceChild(circles[0], hearts[0]); //  Заменят элемент А элементом Б. УСТАРЕВШИЙ МЕТОД. НЕ ИСПОЛЬЗОВАТЬ.

div.innerHTML = "<h1>Hello World!</h1>"; // Записывает ТЕКСТ или HTML структуру

// div.textContent = 'Hello';  // Записывает ТОЛЬКО ТЕКСТ

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); //
// beforebegin - Вставляет HTML код ПЕРЕД элементом
// afterbegin - Вставляет HTML код в НАЧАЛО элемента
// beforeend - Вставляет HTML код КОНЕЦ элемента
// afterend - Вставляет HTML код в ПОСЛЕ элемента

