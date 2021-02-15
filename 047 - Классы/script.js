'use strict';

//имя класса ВСЕГДА(!!!) с большой буквы начинается.
//Концепция. Прототип
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

// Наследование от Rectangle
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        // Вызывает супер конструктор родителя. В данном случае вызовет this.height = height; this.width = width;
        // Всегда первой строчкой в теле конструктора
        super(height, width); 
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}. Цвет: ${this.bgColor}`);
    }
}


//Экземпляры
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
const div = new ColoredRectangleWithText(25, 10, "Hello World", 'Red');

// console.log(square.calcArea());
// console.log(long.calcArea());

console.log(div.calcArea());
div.showMyProps();