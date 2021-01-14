'user strict';

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. 
Если стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать 
на вопрос "Ваш любимый жанр под номером ${номер по порядку}". 
Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно*/

const personalMovieDB = {
    count: {},
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        alert('Error. Ответ должен быть числом, и не может быть пустым');
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}

function rememberMyFilms() {
    for (let i = 1; i <= personalMovieDB.count; i++) {
        let a = null,
            b = null;
        a = prompt('Один из последних просмотренных фильмов?', '');
        b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function writeYourGenres() {
    let genreNum = 1;
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = (i + ". " + prompt(`Ваш любимый жанр под номером ${i}?`));
    }
}

function showMyDB() {
    let q = 'Показать всем вашу кинобазу? Да или Нет?';
    let a = prompt(q, '');
    while (a != 'Да' || a != 'да' || a != 'Нет' || a != 'нет' ) {
        alert('Не верный ответ! Повторите ввод!');
        a = prompt(q, '');
    } if ( a == 'Да' || a == 'да') {
        personalMovieDB.privat = false;
    } else {
        personalMovieDB.privat = true;
    }
}

// Решение Преподователя курса
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }


start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();
// showMyDB(personalMovieDB.privat); // Решение Преподователя курса