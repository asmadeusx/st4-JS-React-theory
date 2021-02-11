'use strict';

const box = document.querySelector('.box');
const clwidth = box.clientWidth;
const cllheight = box.clientHeight;
const ofwidth = box.offsetWidth;
const ofheight = box.offsetHeight;

const btn = document.querySelector('button');

console.log(clwidth, cllheight);
console.log('=================');
console.log(ofwidth, ofheight);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px'; // изменить высоту окна по высоте текста
    console.log(box.scrollTop); // Сколько пикселей пролистано
});

// Получение всех координат выбранного объекта
console.log(box.getBoundingClientRect());

// Получение нужной координаты выбранного объекта
console.log(box.getBoundingClientRect().top);

// отобразить примененные стили к объекуты
const style = window.getComputedStyle(box);
console.log(style);

// отобразить конкретный параметр стиля объекта
console.log(style.display); 

