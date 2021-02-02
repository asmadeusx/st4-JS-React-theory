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
            "Скотт Пилигрим против всех",
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkBox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => { // Событие submit - подтверждение введенной формы.
        event.preventDefault(); // Предотвращает перезагрузку страницы
        let newFilm = addInput.value; // Получает введенное значение
        const favorite = checkBox.checked; // Получает статус галочки

        if (newFilm) { // Проверка на пустое поле. Если Поле Заполнено выполняет действия. Пустое-Ничего не происходит

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 21)}...`;
            }

            if (favorite) {
                console.log(`Добавлен любимый фильм! Это ${newFilm}`);
            }

            movieDB.movies.push(newFilm); // Добавить введеное название фильма в конец массива movies
            sortArr(movieDB.movies); // Сортировка массива по алфавиту
            createMovieList(movieDB.movies, movieList); // Генерирует список заново
        }
        event.target.reset(); // Очищает поле ввода
    });
    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        poster.style.backgroundImage = 'url("./img/bg.jpg")';
    };
    const deleteAdv = (arr) => { // Удаление банеров
        arr.forEach(item => {
            item.remove();
        });
    };
    const sortArr = (arr) => { // Сортировка массива по алфавиту
        arr.sort();
    };
    function createMovieList(films, parent) {
        parent.innerHTML = ''; // Очистка списка
        // Формирование списка с 0.
        films.forEach((filmName, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${filmName} 
                <div class="delete"></div>
            </li>
            `; // Добавление в HTML элементов списка. Номер фильма и название фильма
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove(); // Удаление родительского элемента
                films.splice(i, 1); // Удаление элемента из массива
                createMovieList(films, parent); // Рекурсивный вызов функции самой себя для пересборки списка фильмов
            });
        });
        sortArr(films);
        // На все элементы с классом .delete (кнопка удаления), вешается проверка события Клик. 
        // По клику Родительский элемент(!) элемента с классом .delete удаляется.
        // так же удаляется указанный элемент из массива
        // Рекурсивный вызов функции самой себя для пересборки списка фильмов
    }

    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);

    // a = a + 1 тоже самое что и a += 1
    // a = a + 'fff' тоже самое что и a += 'fff'
});