import React from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'
import { useForm } from 'react-hook-form';

const PizzaEditorCheese = () => {  
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    } 

    const cheeseLogik  = (topping) => {  
        if (PizzaStore.pizzaData[1][topping]) { 
            PizzaStore.total(-PizzaStore.pizzaData[0][topping]) 
            PizzaStore.pizzaData[1][topping] = false 
        } else { 
            PizzaStore.total(PizzaStore.pizzaData[0][topping]) 
            PizzaStore.pizzaData[1][topping] = true  
        }

    }
   

    return (
        <div className="cheese">
            <p className="cheese__title">Добавьте сыр</p>
            <form className="cheese__group" onSubmit={handleSubmit(onSubmit)}>
                <div className="mozzarella__inner">
                    <p className="mozzarella__title">Моцарелла</p>
                    <div className="mozzarella__group">
                        <p className="mozzarella__price">35 ₽</p>
                        <input
                            type="checkbox" 
                            onChange={() => { cheeseLogik('mozzarella') }}
                            className="mozzarella__box"
                            name="cheeseBox"
                            ref={register}
                            value="mozzarella"  
                        /> 
                    </div>
                </div>
                <div className="cheddar__inner">
                    <p className="cheddar__title">Чеддер</p>
                    <div className="cheddar__group">
                        <p className="cheddar__price">30 ₽</p>
                        <input
                            type="checkbox" 
                            onChange={() => { cheeseLogik('cheddar') }}
                            className="cheddar__box"
                            name="cheeseBox"
                            ref={register}
                            value="cheddar"
                        />
                    </div>
                </div>
                <div className="dor-blue__inner">
                    <p className="dor-blue__title">Дор Блю</p>
                    <div className="dor-blue__group">
                        <p className="dor-blue__price">20 ₽</p>
                        <input
                            type="checkbox" 
                            onChange={() => { cheeseLogik('dorBlue') }}
                            className="dor-blue__box"
                            name="cheeseBox"
                            ref={register}
                            value="dorBlue"
                        />
                    </div>
                </div>  
            </form>
        </div>
    )
}

export default observer(PizzaEditorCheese)