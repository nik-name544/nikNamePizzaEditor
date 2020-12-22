import React from 'react'
import { Link } from 'react-router-dom' 
import { store } from '../PizzaEditor/store/PizzaStoreRedux'
import { useQuery } from "react-query";

export default function OrderList() { 
    const PizzaOrderList = store.getState().orderList
    const { isLoading, isError, data, error } = useQuery(
        "someId", () => fetch(`http://localhost:4000/orders`).then((res) => res.json())
    );

    const pizzaName =  () => { 
        const name = [...PizzaOrderList[2]]  
        const newName = name.map((item, i) => { 
            return ( 
                <>
                    <div key={i} className="order-list__ing" >
                        <li>
                            {item}
                        </li>
                    </div>
                </>
            )
        })
        return newName 
    }

    if (isError) {
        return <>Error: {JSON.stringify(error)}</>;
    }

    if (isLoading) {
        return <>Loading...</>;
    } else {
        pizzaName()
    } 
    const FinalTotal = store.getState().total 
    let pizzaItem = pizzaName() || "name"
    return (
        <div className="order-list">
            <header className="payment-form__header">
                <Link to="/pizza-editor-login" className="payment-form__header-link"></Link>
                <p className="payment-form__title">Заказы</p>
            </header>
            <div className="order-list__wrapper">
                <div className="container">
                    <div className="order-list__item">
                        <div className="order-list__item-top delivered">
                            <p className="order-list__item-num">Заказ 2390</p>
                            <p className="order-list__item-state">21 октября 2020, 13:40 • Доставлен</p>
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
                                {FinalTotal} руб • оплата MC *2345
                        </p>
                            <p className="order-list__item-bot-state delivered">
                                Доставляется
                        </p>
                        </div>
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
                                {FinalTotal} руб • оплата MC
                        </p>
                            <p className="order-list__item-bot-state ">
                                Повторить заказ
                        </p>
                        </div>
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
                                {FinalTotal} руб • оплата MC
                        </p>
                            <p className="order-list__item-bot-state ">
                                Повторить заказ
                        </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
