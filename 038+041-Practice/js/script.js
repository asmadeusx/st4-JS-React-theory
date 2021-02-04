'use strict';

// 038 - tabs. Переключение между "закладками"

// 041 - Создаем таймер обратного отсчета на сайте

document.addEventListener('DOMContentLoaded', () => {
    
    //#region - TABS
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
    //#region - TIMER

    const deadline = '2021-02-10';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()); 
        // Разница между Концом акции и текущей датой в милисекундах

        // 1. 1000 милисекунд умножаем на 60 - кол-во милисекунд в 1 минуте
        // 2. 60000 милисекунд умножаем на 60 - кол-во милисекунд в 1 часе
        // 3. 3600000 милисекунд умножаем на 24 - кол-во милисекунд в 1 дне
        // В одних сутках 86 400 000 милисекунд
        // Math.floor - Округление до ближайшего целого.
        // % - возвращает остаток от деления
        const days = Math.floor( t / ( 1000 * 60 * 60 * 24 ) ); // Кол-во дней до окончания акции
        const hours = Math.floor( ( t / ( 1000 * 60 * 60 ) ) % 24 ); // Кол-во часов до окончания акции. 
        const minutes = Math.floor( ( t / ( 1000 * 60 ) ) % 60 ); // Кол-во минут до окончания акции.
        const seconds = Math.floor( ( t / 1000 ) % 60 ); // Кол-во секунд до окончания акции.

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

});