import React, { useState } from 'react'
import { useForm } from 'react-hook-form'; 
import { Link } from "react-router-dom";
import {ToppingsNameRedux} from './store/ToppingsNameRedux' 
import { useDispatch, useSelector } from "react-redux";
import { FinalTotalRedux } from './store/PizzaStoreRedux';

 

const PizzaEditorForm = () => { 
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
    const dispatch = useDispatch();
    const PizzaData = useSelector(state => state.PizzaData);
    const PizzaName = useSelector(state => state.PizzaName);
    const FinalTotal = useSelector(state => state.FinalTotal);
    const values = watch() 
    const priceRedux = FinalTotalRedux(values);
    const onSubmit = (data) => { 
        FinalTotalRedux(values)
        FinalTotal.total = priceRedux 
        ToppingsNameRedux({values, PizzaData, PizzaName, dispatch})
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
                    {PizzaData[0].dough.thin.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="fluffy"
                        name="dough"
                    />
                    {PizzaData[0].dough.fluffy.name}
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
                    {PizzaData[0].size.small.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="big"
                        name="size"
                    />
                    {PizzaData[0].size.big.name}
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
                    {PizzaData[0].sauce.tomatoSauce.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="whiteSauce"
                        name="sauce"
                    />
                    {PizzaData[0].sauce.whiteSauce.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="spicySauce"
                        name="sauce"
                    />
                    {PizzaData[0].sauce.spicySauce.name}
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
                    {PizzaData[0].cheese.mozzarella.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="cheddar"
                        name="cheese"
                    />
                    {PizzaData[0].cheese.cheddar.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="dorBlue"
                        name="cheese"
                    />
                    {PizzaData[0].cheese.dorBlue.name}
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
                    {PizzaData[0].vegetables.tomato.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="mushrooms"
                        name="vegetables"
                    />
                    {PizzaData[0].vegetables.mushrooms.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="pepper"
                        name="vegetables"
                    />
                    {PizzaData[0].vegetables.pepper.name}
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
                    {PizzaData[0].meat.bacon.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="pepperoni"
                        name="meat"
                    />
                    {PizzaData[0].meat.pepperoni.name}
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="ham"
                        name="meat"
                    />
                    {PizzaData[0].meat.ham.name}
                </label>

            </fieldset>
            <Link to="/payment-form" onClick={onSubmit}>
                <button >
                    send {priceRedux } 
                </button>
            </Link>
        </form>
    )
}

export default  PizzaEditorForm 