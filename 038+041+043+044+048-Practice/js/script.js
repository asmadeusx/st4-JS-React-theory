'use strict';

// 038 - tabs. Переключение между "закладками"
// 041 - Создаем таймер обратного отсчета на сайте
// 043 - Создаем Модальное окно "Связаться с нами"
// 048 - Классы

document.addEventListener('DOMContentLoaded', () => {

    //#region - TABS                - 038
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    //#endregion
    //#region - TIMER               - 041

    const deadline = '2021-02-20';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        // Разница между Концом акции и текущей датой в милисекундах

        // 1. 1000 милисекунд умножаем на 60 - кол-во милисекунд в 1 минуте
        // 2. 60000 милисекунд умножаем на 60 - кол-во милисекунд в 1 часе
        // 3. 3600000 милисекунд умножаем на 24 - кол-во милисекунд в 1 дне
        // В одних сутках 86 400 000 милисекунд
        // Math.floor - Округление до ближайшего целого.
        // % - возвращает остаток от деления
        const days = Math.floor(t / (1000 * 60 * 60 * 24)); // Кол-во дней до окончания акции
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24); // Кол-во часов до окончания акции. 
        const minutes = Math.floor((t / (1000 * 60)) % 60); // Кол-во минут до окончания акции.
        const seconds = Math.floor((t / 1000) % 60); // Кол-во секунд до окончания акции.

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        // Устраняет "моргание/прогрузку" таймера при обновлении страницы
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
    //#endregion
    //#region - MODAL WINDOW        - 043

    // получить все элементы с атрибутом data-modal в псевдомассив
    const modalTrigger = document.querySelectorAll('[data-modal]');
    // получить элемент с атрибутом data-close
    const modalClosebtn = document.querySelector('[data-close]');
    // само модальное окно
    const modal = document.querySelector('.modal');

    function modalShow() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerid);
    }

    function modalHide() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Вызвать модальное окно по клику всех элементах с атрибутом data-modal и заблокировать прокрутку
    modalTrigger.forEach(item => {
        item.addEventListener('click', modalShow);
    });

    // Закрыть модальное окно нажатием элемента "Крестик" с атрибутом data-close и разблокировать прокрутку
    modalClosebtn.addEventListener('click', modalHide);

    // Если кликнули на затемненную область вокруг модального окна - закрыть мод. окно. и разблокировать прокрутку
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modalHide();
        }
    });

    // Если нажата клавиша Esc на клавиатуре - закрыть мод. окно и разблокировать прокрутку
    document.addEventListener('keydown', (event) => {
        if (event.code === "Escape" && modal.classList.contains('show')) {
            modalHide();
        }
    });

    // Вызов модального окна через 30 секунд (30000 милисекунд) после открытия страницы.
    const modalTimerid = setTimeout(modalShow, 30000);

    // Вызов модального окна когда стрианицу пролистали до самого низа
    // Появляется один раз, затем обработчик события удаляется
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalShow();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

    //#endregion
    //#region - CLASSES             - 048
    const menuItemSrcs = [
        'img/tabs/vegy.jpg',
        'img/tabs/elite.jpg',
        'img/tabs/post.jpg'
    ];
    const menuItemSrcAlts = [
        'vegy',
        'elite',
        'post'
    ];
    const menuItemTitle = [
        '"Меню "Фитнес"',
        '"Меню “Премиум"',
        '"Меню "Постное"'
    ];
    const menuItemDescr = [
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.'
    ];
    const menuItemPrice = [
        9,
        12,
        10
    ];

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27; // Курс Доллара к Гривнам
            this.changeToUAH(); // Вызов функции на преобразование цены
        }

        changeToUAH() {
            this.price = this.price * this.transfer; // Преобразование из Доллара в Гривны
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
            `;
            this.parent.append(element);
        }
    }

    for (let i = 0; i < 3; i++) {
        new MenuCard(
            menuItemSrcs[i],
            menuItemSrcAlts[i],
            menuItemTitle[i],
            menuItemDescr[i],
            menuItemPrice[i],
            '.menu .container'
        ).render();
    }
    
    //#endregion
});