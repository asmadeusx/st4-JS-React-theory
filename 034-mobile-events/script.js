'use strict';

// touchstart - При возникновении касания к элементу
// touchmove - При перемещении пальца по экрану
// touchend - При отрыве пальца от элемента
// touchenter - При проведении пальца по экрану и наведнии на элемент
// touchleave - При проведении пальца по экрану и ушел за пределы элемента
// touchcancel - При выходе пальца за пределы элемента


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();
        console.log('touchstart');
        console.log(event.targetTouches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        console.log('touchmove');
        console.log(event.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();
        console.log('touchend');
    });
});

// Свойства:
// touches - Выводит список всех пальцев касающихся экрана
// targetTouches - Выводит список всех пальцев касающихся конкретного элемента
// changedTouches - Выводит список всех пальцев участвующих в событии. 
// Например если 3 пальца касаются элемента, и 1 оторвали от элемента, то именно он отобразится этим свойством.