

export const ToppingsNameRedux = ({ values, PizzaServData, PizzaName, dispatch }) => {
    const newToppingRedux = []
    let pizzaDataRedux = PizzaServData
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
    newToppingRedux.push(doughNameRedux, sizeNameRedux, sauceNameRedux, ...cheeseNameRedux, ...vegetablesNameRedux, ...meatNameRedux)
    PizzaName = [...newToppingRedux]
    dispatch({ type: "pizza/pizzaName", payload: PizzaName })
}
