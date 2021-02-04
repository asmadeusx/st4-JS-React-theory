'use strict';

const box = document.querySelector('.box');
const clwidth = box.clientWidth;
const cllheight = box.clientHeight;
const ofwidth = box.offsetWidth;
const ofheight = box.offsetHeight;

const btn = document.querySelector('button');

console.log(clwidth, cllheight);
console.log('=================');
console.log(ofwidth, ofheight);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});