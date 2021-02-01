'use strict';

// console.log(document.head); 
// Выводит в консоль html разметку указанного тега.

// console.log(document.documentElement);
// Выводит в консоль всю разметку html

// console.log(document.body.childNodes);
// Выводит в консоль псевдомассив дочерних элементов body

// console.log(document.body.firstChild);
// Выводит в консоль первого дочернего родственника body

// console.log(document.body.firstElementChild);
// Выводит в консоль первый дочерний Элемент body

// console.log(document.body.lastChild);
// Выводит в консоль последнего дочернего родственника body

// console.log(document.body.lastElementChild);
// Выводит в консоль последний дочерний Элемент body

// console.log(document.querySelector('#current').parentNode);
// Выводит в консоль родителя выбранного элемента

// console.log(document.querySelector('#current').parentElement);
// Выводит в консоль родительский элемент выбранного элемента

// console.log(document.querySelector('#current').parentNode.parentNode);
// Выводит в консоль родителя родителя выбранного элемента

// DATA атрибуты

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// Выводит в консоль следующего родственника выбранного элемента.

// console.log(document.querySelector('[data-current="3"]').previousSibling);
// Выводит в консоль предыдущего родственника выбранного элемента.

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// Выводит в консоль следующего родственника (ЭЛЕМЕНТ) выбранного элемента.

// console.log(document.querySelector('[data-current="3"]').previousElementSibling);
// Выводит в консоль предыдущего родственника (ЭЛЕМЕНТ) выбранного элемента.


// Переборка всех элементов в псевдомассиве childNodes 
// и последующих вывод ТОЛЬКО Элементов.
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}