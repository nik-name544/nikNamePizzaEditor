import { observable } from 'mobx';

class PizzaStore {
    @observable pizzaData = pizzaDataStore()

    @observable finalTotal = 0

    @observable toppings = []

    @observable cardNum = ""

    @observable address = [] 
}


export default new PizzaStore()

export const FinalTotal = ({ dough, size, sauce, cheese, vegetables, meat }) => {
    let pizzaData = pizzaDataStore()[0] 
    const doughPrice = pizzaData.dough[dough].price; 
    const sizePrice = pizzaData.size[size].price; 
    const saucePrice = pizzaData.sauce[sauce].price; 
    const cheesePrice = cheese.reduce(
        (price, cheese) => price + pizzaData.cheese[cheese].price,
        0
    ); 
    const vegetablesPrice = vegetables.reduce(
        (price, vegetables) => price + pizzaData.vegetables[vegetables].price,
        0
    ); 
    const meatPrice = meat.reduce(
        (price, meat) => price + pizzaData.meat[meat].price,
        0
    ); 
     
    return doughPrice + sizePrice + saucePrice + cheesePrice + vegetablesPrice + meatPrice + 200;
}
 

function pizzaDataStore() {
    return [
        {
            dough: {
                thin: { name: 'thin', price: 25, checked: false },
                fluffy: { name: 'fluffy', price: 40, checked: false },
            },

            size: {
                small: { name: 'small', price: 25, checked: false },
                big: { name: 'big', price: 50, checked: false },
            },

            sauce: {
                tomatoSauce: { name: 'tomato sauce', price: 15, checked: false },
                whiteSauce: { name: 'white sauce', price: 20, checked: false },
                spicySauce: { name: 'spicy sauce', price: 25, checked: false },
            },

            cheese: {
                mozzarella: { name: 'mozzarella', price: 35, checked: false },
                cheddar: { name: 'cheddar', price: 30, checked: false },
                dorBlue: { name: 'dor-blue', price: 20, checked: false },
            },

            vegetables: {
                tomato: { name: 'tomato', price: 20, checked: false },
                mushrooms: { name: 'mushrooms', price: 40, checked: false },
                pepper: { name: 'pepper', price: 30, checked: false },
            },

            meat: {
                bacon: { name: 'bacon', price: 30, checked: false },
                pepperoni: { name: 'pepperoni', price: 35, checked: false },
                ham: { name: 'ham', price: 20, checked: false },
            },


        },
    ]
}

