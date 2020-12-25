import React, { useState } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'
import './pizzaEditorStyle.css'
import { useForm } from 'react-hook-form';

const PizzaEditorSize = () => {
    const [size, setSize] = useState({ option: 'size30' })
    let pizzaBigPrice = PizzaStore.pizzaData[0].size35
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    const handleSize = (e) => {
        setSize({ option: e.target.value });
    }

    const changeSize = (e) => {
        if (e.target.value === 'size30') {
            PizzaStore.total(-pizzaBigPrice)
            PizzaStore.pizzaData[1].size30 = true
            PizzaStore.pizzaData[1].size35 = false
        } else if (e.target.value === 'size35') {
            PizzaStore.total(pizzaBigPrice)
            PizzaStore.pizzaData[1].size30 = false
            PizzaStore.pizzaData[1].size35 = true
        } 
    }


    return (
        <form className="size" onSubmit={handleSubmit(onSubmit)}>
            <p className="size__title">Размер</p>
            <div className="size__inner">
                <label  className="size-small__label">
                    <input
                        type="radio"
                        value="size30"
                        checked={size.option === 'size30'}
                        onChange={handleSize}
                        onClick={changeSize}
                        className="size-small__box"
                        name="size"
                        ref={register}
                        disabled={PizzaStore.pizzaData[1].size30}
                    />
                    <span id="size-small__text">
                        30 см
                    </span>
                </label>
                <label  className="size-big__label">
                    <input
                        type="radio"
                        value="size35"
                        checked={size.option === 'size35'}
                        onChange={handleSize}
                        onClick={changeSize}
                        className="size-big__box"
                        name="size"
                        ref={register}
                        disabled={PizzaStore.pizzaData[1].size35}
                    />
                    <span id="size-big__text">
                        35 см
                    </span>
                </label>
            </div > 
        </form>
    )
}

export default observer(PizzaEditorSize)