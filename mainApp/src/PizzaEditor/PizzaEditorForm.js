import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react'
import PizzaStore from './store/PizzaStore'
import { FinalTotal } from './store/PizzaStore'
import { Link } from "react-router-dom";


const ToppingsName = (data) => {
    const newTopping = []
    let pizzaData = PizzaStore.pizzaData[0]
    const doughName = pizzaData.dough[data.dough].name
    const sizeName = pizzaData.size[data.size].name;
    const sauceName = pizzaData.sauce[data.sauce].name;
    const cheeseName = data.cheese.map((name, i) => {
        return pizzaData.cheese[name].name
    })
    const vegetablesName = data.vegetables.map((name, i) => {
        return pizzaData.vegetables[name].name
    })
    const meatName = data.meat.map((name, i) => {
        return pizzaData.meat[name].name
    })
    newTopping.push([doughName], [sizeName], [sauceName], ...cheeseName, ...vegetablesName, ...meatName) 
    PizzaStore.toppings = [...newTopping]
}




const PizzaEditorForm = () => {
    let pizzaData = PizzaStore.pizzaData[0]
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            size: 'small',
            sauce: 'tomatoSauce',
            dough: 'thin',
            cheese: [],
            vegetables: [],
            meat: [],
        }
    })

    const values = watch()
    const price = FinalTotal(values); 
    const onSubmit = (data) => {
        PizzaStore.FinalTotal = price
        ToppingsName(values) 
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <legend>Выберите тесто:</legend>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="thin"
                        name="dough"
                    />
                    {pizzaData.dough.thin.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="fluffy"
                        name="dough"
                    />
                    {pizzaData.dough.fluffy.name}
                </label>
            </fieldset>
            <fieldset>
                <legend>Выберите размер:</legend>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="small"
                        name="size"
                    />
                    {pizzaData.size.small.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="big"
                        name="size"
                    />
                    {pizzaData.size.big.name}
                </label>

            </fieldset>


            <fieldset>
                <legend>Выберите соус:</legend>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="tomatoSauce"
                        name="sauce"
                    />
                    {pizzaData.sauce.tomatoSauce.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="whiteSauce"
                        name="sauce"
                    />
                    {pizzaData.sauce.whiteSauce.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="spicySauce"
                        name="sauce"
                    />
                    {pizzaData.sauce.spicySauce.name}
                </label>

            </fieldset>

            <fieldset>
                <legend>Добавте сыр:</legend>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="mozzarella"
                        name="cheese"
                    />
                    {pizzaData.cheese.mozzarella.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="cheddar"
                        name="cheese"
                    />
                    {pizzaData.cheese.cheddar.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="dorBlue"
                        name="cheese"
                    />
                    {pizzaData.cheese.dorBlue.name}
                </label>

            </fieldset>

            <fieldset>
                <legend>Добавте овощи:</legend>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="tomato"
                        name="vegetables"
                    />
                    {pizzaData.vegetables.tomato.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="mushrooms"
                        name="vegetables"
                    />
                    {pizzaData.vegetables.mushrooms.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="pepper"
                        name="vegetables"
                    />
                    {pizzaData.vegetables.pepper.name}
                </label>

            </fieldset>

            <fieldset>
                <legend>Добавте мясо:</legend>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="bacon"
                        name="meat"
                    />
                    {pizzaData.meat.bacon.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="pepperoni"
                        name="meat"
                    />
                    {pizzaData.meat.pepperoni.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="ham"
                        name="meat"
                    />
                    {pizzaData.meat.ham.name}
                </label>

            </fieldset>
            <Link to="/payment-form" onClick={onSubmit}>
                <button >
                    send {price}
                </button>
            </Link>
        </form>
    )
}

export default observer(PizzaEditorForm)