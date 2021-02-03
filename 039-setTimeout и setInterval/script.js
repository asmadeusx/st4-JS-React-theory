
    // setTimeout - задержка запуска на N секунд.
    // Аргумент №1 - Функция. Анонимная или нет. 
    // Аргумент №2 - Задержка в Милисекундах
    // Аргумент №3 - Аргумент для функции

    // setInterval - запуск функции каждые N секунд.
    // Аргумент №1 - Функция. Анонимная или нет. 
    // Аргумент №2 - Задержка в Милисекундах
    // Аргумент №3 - Аргумент для функции


const btn = document.querySelector('.btn');
let timerId;
let i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 3000, 'Logger');
//     timerId = setInterval(logger, 500, 'Logger'); 
// });

// function logger(text) {
//     if (i === 3) {
//         clearInterval(timerId); // Сброс таймера
//     }
//     console.log(text);
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log(), 500);
// }, 500);

