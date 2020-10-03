'use strict'

class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand)
    }
    print() {
        console.log(`${this.name}을 하는 음식점들 : `);
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노');

const chicken = new Food('chicken');
chicken.addBrand('네네');
chicken.addBrand('BBQ');

pizza.print();
chicken.print();