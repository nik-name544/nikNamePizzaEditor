import React from 'react' 

export const ToppingsNameRedux = ({ values, PizzaData, PizzaName, dispatch }) => {
    const newToppingRedux = []
    let pizzaDataRedux = PizzaData[0]
    const doughNameRedux = pizzaDataRedux.dough[values.dough].name
    const sizeNameRedux = pizzaDataRedux.size[values.size].name;
    const sauceNameRedux = pizzaDataRedux.sauce[values.sauce].name;
    const cheeseNameRedux = values.cheese.map((name, i) => {
        return pizzaDataRedux.cheese[name].name
    })
    const vegetablesNameRedux = values.vegetables.map((name, i) => {
        return pizzaDataRedux.vegetables[name].name
    })
    const meatNameRedux = values.meat.map((name, i) => {
        return pizzaDataRedux.meat[name].name
    })
    newToppingRedux.push([doughNameRedux], [sizeNameRedux], [sauceNameRedux], ...cheeseNameRedux, ...vegetablesNameRedux, ...meatNameRedux)
    PizzaName = [...newToppingRedux]
    dispatch({ type: "set_name", payload: PizzaName }) 
} 