import React, { useState, useEffect } from 'react'
import PizzaEditorSize from './PizzaEditorSize'
import PizzaEditorDough from './PizzaEditorDough'
import PizzaEditorSauce from './PizzaEditorSauce'
import PizzaEditorCheese from './PizzaEditorCheese'
import PizzaEditorVegetables from './PizzaEditorVegetables'
import PizzaEditorMeat from './PizzaEditorMeat'
import { observer } from 'mobx-react'
import PizzaStore from './store/pizzaStore'
import './pizzaEditorStyle.css'
import { Link } from 'react-router-dom' 


const PizzaEditor = () => {
  
 
    return (
        <>
            <div className="mainApp">
                {/* <form  onSubmit={handleSubmit(onSubmit)}> */}
                <div>
                    <div className="size-dough__inner">
                        <div className="block">
                            <PizzaEditorSize />
                        </div>
                        <div className="block">
                            <PizzaEditorDough />
                        </div>
                    </div>
                    <div className="block">
                        <PizzaEditorSauce />
                    </div>
                    <div className="block">
                        <PizzaEditorCheese />
                    </div>
                    <div className="block">
                        <PizzaEditorVegetables />
                    </div>
                    <div className="block">
                        <PizzaEditorMeat />
                    </div>
                    <div className="submit__btn-wrapper">
                        <div className="submit__btn-inner active">
                            <Link to="/pizza-editor-checkout" className="submit__btn active">Заказать за    руб</Link>
                        </div>
                        {/* <button type="button" onClick={onSubmit} className="submitBtn">Заказать за 200 руб</button> */}
                    </div>
                </div>
                {/* <button>send</button>
                </form> */}

            </div>
            <p>{PizzaStore.defoultSauce + PizzaStore.defoultP}</p>
        </>
    )
   
}

export default observer(PizzaEditor)