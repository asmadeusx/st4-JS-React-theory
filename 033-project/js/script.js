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

// import imageURL from '../img/bg.jpg';  // для сборщика Parcel'а

// Применение скрипта ниже только после загрузки всей DOM конструкции
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против всех"
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkBox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Предотвращает перезагрузку страницы
        const newFilm = addInput.value; // Получает введенное значение
        const favorite = checkBox.checked; // Проверяет поставлена ли галочка
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies); // Сортировка массива по алфавиту
    });

    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        poster.style.backgroundImage = 'url("./img/bg.jpg")';
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = ''; // Очистка списка

        films.forEach((filmName, i) => {
            let a;
            if (filmName.length > 21) {
                a = filmName.substr(0, 21) + ' ...';
            } else {
                a = filmName;
            }
            parent.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${a}
            <div class="delete"></div>
        </li>
        `;
        });
    }

    sortArr(movieDB.movies);
    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);

    // a = a + 1 тоже самое что и a += 1
    // a = a + 'fff' тоже самое что и a += 'fff'
});