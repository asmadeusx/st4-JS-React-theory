/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// import imageURL from '../img/bg.jpg';  // для сборщика Parcel'а

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Кин-дза-дза",
        "Бэтмен"
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');


adv.forEach(item => {
    item.remove();
});

genre.textContent = 'ДРАМА';

poster.style.backgroundImage = 'url("./img/bg.jpg")';

movieList.innerHTML = '';

movieDB.movies.sort(); // Сортировка массива по алфавиту

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `;
});

// a = a + 1 тоже самое что и a += 1
// a = a + 'fff' тоже самое что и a += 'fff'