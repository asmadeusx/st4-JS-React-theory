'use strict';

// 027 - Задачи с собеседований на понимание основ

// 1•	Какое будет выведено значение: 
// let x = 5;
// alert(x++);
// Ответ 5.

// 2•	Чему равно такое выражение: [ ] + false - null + true;
// [ ] - пустой массив - Истина
// null - ложь
// true + false - false + true; 
// let ans = Boolean(true + false - false + true);
// console.log(ans);
// Ответ True.

// 3•	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// let y = 1; let x = y = 2; alert(x);
// Ответ 2;

// 4•	Чему равна сумма [ ] + 1 + 2?
// Ответ 12;
// let m = [ ];
// let n = 1 + 2;
// let y = [ ] + 1 + 2;
// let z = { } + 1 + 2;
// console.log(typeof(m));
// console.log(typeof(n));
// console.log(typeof(y));
// console.log(typeof(z));

// 5•	Что выведет этот код: alert( "1"[0] )?
// Ответ 1

// 6•	Чему равно 2 && 1 && null && 0 && undefined ?
// 2 && 1 && null && 0 && undefined
// true && true && false && false && false
// Ответ null; 
// console.log(2 && 1 && null && 0 && undefined);

// 7•	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// Ответ Да, первое с динамическим преобразованием в логический элемент, а второе нет.
// let a = 1,
//     b = 'true';

// let x = !!(a && b),
//     y = (a && b);

// console.log(typeof(x));
// console.log(typeof(y));

// 8•	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// Ответ 3

// 9•	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// Ответ Истина
let a = [1, 2, 3],
    b = [1, 2, 3];
if (a == b) {
    console.log('True');
} else {
    console.log('False');
}