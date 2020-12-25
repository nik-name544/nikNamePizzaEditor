import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'
import { useForm } from 'react-hook-form';

const PizzaEditorMeat = () => {  
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
 
    const meatLogik  = (topping) => { 
        if (PizzaStore.pizzaData[1][topping]) { 
            PizzaStore.total(-PizzaStore.pizzaData[0][topping]) 
            PizzaStore.pizzaData[1][topping] = false 
        } else { 
            PizzaStore.total(PizzaStore.pizzaData[0][topping]) 
            PizzaStore.pizzaData[1][topping] = true 
        }

    }

    return (
        <div className="meat">
            <p className="meat__title">Добавьте овощи</p>
            <form className="meat__group" onSubmit={handleSubmit(onSubmit)}>
                <div className="bacon__inner">
                    <p className="bacon__title">Бекон</p>
                    <div className="bacon__group">
                        <p className="bacon__price">30 ₽</p>
                        <input
                            type="checkbox" 
                            onChange={() => {meatLogik('bacon')}}
                            className="bacon__box"
                            name="meatBox"
                            ref={register}
                            value="bacon" 
                        />
                    </div>
                </div>
                <div className="pepperoni__inner">
                    <p className="pepperoni__title">Пепперони</p>
                    <div className="pepperoni__group">
                        <p className="pepperoni__price">35 ₽</p>
                        <input
                            type="checkbox" 
                            onChange={() => {meatLogik('pepperoni')}}
                            className="pepperoni__box"
                            name="meatBox"
                            ref={register}
                            value="pepperoni" 
                        />
                    </div>
                </div>
                <div className="ham__inner">
                    <p className="ham__title">Ветчина</p>
                    <div className="ham__group">
                        <p className="ham__price">20 ₽</p>
                        <input
                            type="checkbox" 
                            onChange={() => {meatLogik('ham')}}
                            className="ham__box"
                            name="meatBox"
                            ref={register}
                            value="ham"
                        />
                    </div>
                </div> 
            </form>
        </div>
    )

}

export default observer(PizzaEditorMeat)