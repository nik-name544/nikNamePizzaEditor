import { createStore, combineReducers  } from "redux";
import React from 'react'

export const pizzaDataReducer = (state = PizzaDataStore() ) => {
    return state;
}

export const pizzaNameReducer = (state = { toppings: [] }, action) => { 
    switch (action.type) {
        case "set_name":
            return { toppings: action.payload };
        default:
            return state;
    }
}

export const finalTotalReducer = (state = { total: 200 }, action) => { 
    switch (action.type) {
        case "total":
            return { total: action.payload };
        default:
            return state;
    }
}


export const cardNumReducer = (state = { cardnum: "" }, action) => {
    switch (action.type) {
        case "set_card":
            return { username: action.payload };
        default:
            return state;
    }
}

export const addressReducer = (state = { address: [] }, action) => { 
    switch (action.type) {
        case "set_address":
            return { toppings: action.payload };
        default:
            return state;
    }
}

export const FinalTotalRedux = ({ dough, size, sauce, cheese, vegetables, meat }) => {
    let pizzaData = PizzaDataStore()[0] 
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



const rootReducer = combineReducers({
    PizzaData: pizzaDataReducer,
    PizzaName:pizzaNameReducer,
    CardNum: cardNumReducer,
    Address:addressReducer,
    FinalTotal:finalTotalReducer
});

 
export const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));







function PizzaDataStore() {
    return [
        {
            dough: {
                thin: { name: 'thin', price: 25 },
                fluffy: { name: 'fluffy', price: 40 },
            },

            size: {
                small: { name: 'small', price: 25 },
                big: { name: 'big', price: 50 },
            },

            sauce: {
                tomatoSauce: { name: 'tomato sauce', price: 15 },
                whiteSauce: { name: 'white sauce', price: 20 },
                spicySauce: { name: 'spicy sauce', price: 25 },
            },

            cheese: {
                mozzarella: { name: 'mozzarella', price: 35 },
                cheddar: { name: 'cheddar', price: 30 },
                dorBlue: { name: 'dor-blue', price: 20 },
            },

            vegetables: {
                tomato: { name: 'tomato', price: 20 },
                mushrooms: { name: 'mushrooms', price: 40 },
                pepper: { name: 'pepper', price: 30 },
            },

            meat: {
                bacon: { name: 'bacon', price: 30 },
                pepperoni: { name: 'pepperoni', price: 35 },
                ham: { name: 'ham', price: 20 },
            },


        },
    ]
}

