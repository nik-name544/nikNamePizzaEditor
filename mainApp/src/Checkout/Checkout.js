import React from 'react' 
import { Link } from 'react-router-dom' 
import { store } from '../PizzaEditor/store/PizzaStoreRedux'


export default function  Checkout() { 
    const PizzaName = store.getState().toppings 
    const FinalTotal = store.getState().total 
    const name = PizzaName 
    let pizzaItem = name.map((item, i) => {
        return (
            <div key={i} className="order-list__ing">
                <li>
                    {item}
                </li>
            </div>
        )
    })

    return (
        <>
            <div className="order">
                <div className="container">
                    <header className="order__header">
                        <div className="order__close-btn"></div>
                    </header>
                    <div className="order__ico  wrong"></div>
                    <div className="order__title">Спасибо за заказ!</div>
                    <div className="order__text">Заказ успешно оплачен, ждите вашу пиццу уже через час</div>
                    <div className="order__btn wrong">
                        <Link className="order__btn-text " to="/pizza-editor-registration">Попробовать еще раз</Link>
                    </div>
                    <div className="order-list__item">
                        <div className="order-list__item-top ">
                            <p className="order-list__item-num">Заказ 2390</p>
                            <p className="order-list__item-state">21 октября 2020, 13:40</p>
                        </div>
                        <div className="order-list__item-mid">
                            <p className="order-list__item-title">
                                Ленивая Маргарита
                            </p>
                            <div className="order-list__item-text">
                                {pizzaItem}
                            </div>
                        </div>
                        <div className="order-list__item-bot">
                            <p className="order-list__item-paid"> 
                                {FinalTotal  + 180} руб • оплата MC 
                            </p>
                            <p className="order-list__item-bot-state ">
                                Повторить заказ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
