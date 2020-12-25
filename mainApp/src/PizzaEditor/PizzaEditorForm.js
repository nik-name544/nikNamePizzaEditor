 
import React  from 'react'
import { useForm } from 'react-hook-form'; 
import { Link } from "react-router-dom";
import { ToppingsNameRedux } from './store/ToppingsNameRedux'
import { useDispatch } from "react-redux";
import { FinalTotalRedux } from './store/PizzaStoreRedux';
import { store } from './store/PizzaStoreRedux' 
import { useQuery } from "react-query";
  
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
    let PizzaServData = store.getState().pizzaServData[0] 
    const PizzaName = store.getState().toppings 
    const values = watch() 
    const priceRedux = FinalTotalRedux(values, PizzaServData);
    const onSubmit = (data) => { 
        FinalTotalRedux( values, PizzaServData )
        dispatch({ type: "pizza/finalTotal", payload: priceRedux }) 
        ToppingsNameRedux({ values, PizzaServData, PizzaName, dispatch })
    } 
    if (isError) {
        return <>Error: {JSON.stringify(error)}</>; 
    }

    if (isLoading) {
        return <>Loading...</>;
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
                    {PizzaServData.dough.thin.name}  
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="fluffy"
                        name="dough"
                    /> 
                    {PizzaServData.dough.fluffy.name}  
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
                    {PizzaServData.size.small.name} 
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="big"
                        name="size"
                    /> 
                    {PizzaServData.size.big.name}  
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
                    {PizzaServData.sauce.tomatoSauce.name}  
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="whiteSauce"
                        name="sauce"
                    /> 
                    {PizzaServData.sauce.whiteSauce.name} 
                </label>
                <label>
                    <input
                        ref={register}
                        type="radio"
                        value="spicySauce"
                        name="sauce"
                    /> 
                    {PizzaServData.sauce.spicySauce.name} 
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
                    {PizzaServData.cheese.mozzarella.name} 
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="cheddar"
                        name="cheese"
                    /> 
                    {PizzaServData.cheese.cheddar.name} 
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="dorBlue"
                        name="cheese"
                    /> 
                    {PizzaServData.cheese.dorBlue.name}  
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
                    {PizzaServData.vegetables.tomato.name}  
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="mushrooms"
                        name="vegetables"
                    /> 
                    {PizzaServData.vegetables.mushrooms.name}  
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="pepper"
                        name="vegetables"
                    /> 
                    {PizzaServData.vegetables.pepper.name}  
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
                    {PizzaServData.meat.bacon.name} 
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="pepperoni"
                        name="meat"
                    /> 
                    {PizzaServData.meat.pepperoni.name}  
                </label>
                <label>
                    <input
                        ref={register}
                        type="checkbox"
                        value="ham"
                        name="meat"
                    /> 
                    {PizzaServData.meat.ham.name}  
                </label>

            </fieldset> 
            <Link to="/payment-form" onClick={onSubmit}>
                <button > 
                    send {priceRedux}  
                </button>
            </Link>
        </form>
    )

 
}
 
export default PizzaEditorForm  
