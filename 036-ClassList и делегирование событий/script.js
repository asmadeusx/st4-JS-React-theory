'use strict';

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // Выводит кол-во классов выбранного элемента
// console.log(btns[0].classList.item(1)); // Выводит имя класса под номером №2 выбранного элемента
// console.log(btns[0].classList.add('red')); // Добавляет класс red к выбранному элементу
// console.log(btns[0].classList.remove('blue')); // Удаляет класс red к выбранному элементу
// console.log(btns[0].classList.toggle('blue')); // Включает/Выключает класс red к выбранному элементу
// console.log(btns[1].classList.add('red', 'test')); // Добавляет класс red и test к выбранному элементу

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns.forEach(item => {
    item.classList.add('blue');
    // item.classList.remove('blue');
    // item.classList.remove('red');
    // item.classList.remove('some');
    // item.addEventListener('click', (event) => {
    //     if (item.classList.contains('red')) {
    //         item.classList.remove('red');
    //     } else {
    //         item.classList.add('red');
    //     }
    //     console.log('click - Add Red');
    //     item.classList.toggle('test');
    // });
});

wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.tagName == 'BUTTON') {
    //     console.log('Hello');
    // }
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);