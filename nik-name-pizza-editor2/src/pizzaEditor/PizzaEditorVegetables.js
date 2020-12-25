import React from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'
import { useForm } from 'react-hook-form';

const PizzaEditorVegetables = () => {  
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    } 

    const vegetablesLogik = (topping) => { 
        if (PizzaStore.pizzaData[1][topping]) { 
            PizzaStore.total(-PizzaStore.pizzaData[0][topping]) 
            PizzaStore.pizzaData[1][topping] = false
        } else { 
            PizzaStore.total(PizzaStore.pizzaData[0][topping]) 
            PizzaStore.pizzaData[1][topping] = true
        }

    }

    return (

        <div className="vegetables">
            <p className="vegetables__title">Добавьте овощи</p>
            <form className="vegetables__group" onSubmit={handleSubmit(onSubmit)}>
                <div className="tomato__inner">
                    <p className="tomato__title">Помидор</p>
                    <div className="tomato__group">
                        <p className="tomato__price">20 ₽</p>

                        <input
                            type="checkbox"
                            onChange={() => { vegetablesLogik('tomato') }} 
                            className="tomato__box"
                            name="vegetablesBox"
                            ref={register}
                            value="tomato"
                        />
                    </div>
                </div>
                <div className="mushrooms__inner">
                    <p className="mushrooms__title">Грибы</p>
                    <div className="mushrooms__group">
                        <p className="mushrooms__price">40 ₽</p>

                        <input
                            type="checkbox"
                            onChange={() => { vegetablesLogik('mushrooms') }}
                            className="mushrooms__box"
                            name="vegetablesBox"
                            ref={register}
                            value="mushrooms"
                        />
                    </div>
                </div>
                <div className="pepper__inner">
                    <p className="pepper__title">Перец</p>
                    <div className="pepper__group">
                        <p className="pepper__price">30 ₽</p>
                        <input
                            type="checkbox"
                            onChange={() => { vegetablesLogik('pepper') }}
                            className="pepper__box"
                            name="vegetablesBox"
                            ref={register}
                            value="pepper"
                        />
                    </div>
                </div> 
            </form>
        </div>
    )
}

export default observer(PizzaEditorVegetables)