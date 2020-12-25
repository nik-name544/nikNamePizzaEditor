import React, { useState  } from 'react'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'
import { useForm } from 'react-hook-form';

const PizzaEditorDough = () => {
    const [dough, setDough] = useState({ option: 'thin' })
    let dougThinP = PizzaStore.pizzaData[0].thin
    let dougFluffyP = PizzaStore.pizzaData[0].fluffy
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    const handleDough = (e) => {
        setDough({ option: e.target.value })
    }

    const changeDough = (e) => {
        if (e.target.value === 'thin') {
            let doughP = -dougFluffyP + dougThinP
            PizzaStore.total(doughP)
            PizzaStore.pizzaData[1].thin = true
            PizzaStore.pizzaData[1].fluffy = false
        } else if (e.target.value === 'fluffy') {
            let doughP1 = -dougThinP + dougFluffyP
            PizzaStore.total(doughP1)
            PizzaStore.pizzaData[1].thin = false
            PizzaStore.pizzaData[1].fluffy = true
        }
         
    }


    return (
        <form className="dough" onSubmit={handleSubmit(onSubmit)}>
            <p className="dough__title">Тесто</p>
            <div className="dough__inner">
                <label className="dough-thin__label">
                    <input
                        type="radio"
                        value="thin"
                        checked={dough.option === 'thin'}
                        onChange={handleDough}
                        onClick={changeDough}
                        className="dough-thin__box"
                        name="dough"
                        ref={register}
                        disabled={PizzaStore.pizzaData[1].thin}
                    />
                    <span id="dough-thin__text">
                        Тонкое
                    </span>
                </label>
                <label className="dough-fluffy__label">
                    <input
                        type="radio"
                        value="fluffy"
                        checked={dough.option === 'fluffy'}
                        onChange={handleDough}
                        onClick={changeDough}
                        className="dough-fluffy__box"
                        name="dough"
                        ref={register}
                        disabled={PizzaStore.pizzaData[1].fluffy}
                    />
                    <span id="dough-fluffy__text">
                        Пышное
                    </span>
                </label>
            </div> 
        </form>
    )
}

export default observer(PizzaEditorDough)