'use strict';

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            alert('Error. Ответ должен быть числом, и не может быть пустым');
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', "");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function () {
        // Вариант №1
        // for (let i = 1; i <= 3; i++) { 
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}?`);
        //     if (genre == '' || genre == null) {
        //         console.log('Вы ввели некорректные данные, или не ввели их вообще');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
        // }
        // personalMovieDB.genres.forEach((item, i) => {
        //     console.log(`Любимый жанр №${i + 1} - это ${item}`);
        // });
        
        // Вариант №2
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`);
            if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные данные, или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    },
    toggleVisibleMyDB: function () {
        /* jshint -W030 */
        personalMovieDB.privat == false ? personalMovieDB.privat = true : personalMovieDB.privat = false;
        /* jshint +W030 */
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
// window.personalMovieDB = personalMovieDB; // Решение Кости