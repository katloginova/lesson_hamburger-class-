'use strict';


class Hamburger {
    static SMALL_SIZE = {
        name: 'small burger',
        price: 50,
        callories: 20,
    }

    static MEDIUM_SIZE = {
        name: 'medium burger',
        price: 75,
        callories: 30,
    }

    static BIG_SIZE = {
        name: 'big burger',
        price: 100,
        callories: 40,
    }

    static TOPPING_CHEESE = {
        name: 'cheese topping',
        price: 10,
        callories: 20,
    }

    static TOPPING_SALAD = {
        name: 'salad topping',
        price: 20,
        callories: 5,
    }

    static TOPPING_POTATO = {
        name: 'potato topping',
        price: 15,
        callories: 10,
    }

    static TOPPING_CONDIMENT = {
        name: 'condiment topping',
        price: 15,
        callories: 0,
    }

    static TOPPING_MAYO = {
        name: 'mayo topping',
        price: 20,
        callories: 5,
    }


    constructor(sizeHamburger) {
        this.size = sizeHamburger;
        this.toppings = [];
    }

    addTopping(...adderToppings) {
        this.toppings = [...this.toppings, ...adderToppings];
    }

    getPrice() {
        return this.size.price + this.toppings
            .map((toppingUnit) => toppingUnit.price)
            .reduce((acc, valuePrice) => (acc + valuePrice));
    }

    getCallories() {
        return this.size.callories + this.toppings
            .map((toppingObj) => toppingObj.callories)
            .reduce((acc, valueCallor) => (acc + valueCallor));
    }
}

const hamburger = new Hamburger(Hamburger.BIG_SIZE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_CHEESE, Hamburger.TOPPING_SALAD);


console.log(hamburger);
console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Callories with sauce: ' + hamburger.getCallories());