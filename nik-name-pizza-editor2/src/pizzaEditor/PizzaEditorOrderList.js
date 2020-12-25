import React from 'react'
import { Link } from 'react-router-dom'

export default function PizzaEditorOrderList() {
    return (
        <div className="order-list">
            <header className="payment-form__header">
                <Link to="/pizza-editor-login" className="payment-form__header-link"></Link>
                <p className="payment-form__title">Заказы</p>
            </header>
            <div className="order-list__wrapper">
                <div class="container">
                    <div class="order-list__item">
                        <div class="order-list__item-top delivered">
                            <p class="order-list__item-num">Заказ 2390</p>
                            <p class="order-list__item-state">21 октября 2020, 13:40 • Доставлен</p>
                        </div>
                        <div class="order-list__item-mid">
                            <p class="order-list__item-title">
                                Ленивая Маргарита
                        </p>
                            <p class="order-list__item-text">
                                30 см на толстом тесте• Томатный соус • Моцарелла • Томаты • Бекон
                        </p>
                        </div>
                        <div class="order-list__item-bot">
                            <p class="order-list__item-paid">
                                420 руб • оплата MC *2345
                        </p>
                            <p class="order-list__item-bot-state delivered">
                                Доставляется
                        </p>
                        </div>
                    </div>

                    <div class="order-list__item">
                        <div class="order-list__item-top ">
                            <p class="order-list__item-num">Заказ 2390</p>
                            <p class="order-list__item-state">21 октября 2020, 13:40</p>
                        </div>
                        <div class="order-list__item-mid">
                            <p class="order-list__item-title">
                                Ленивая Маргарита
                        </p>
                            <p class="order-list__item-text">
                                30 см на толстом тесте• Томатный соус • Моцарелла • Томаты • Бекон
                        </p>
                        </div>
                        <div class="order-list__item-bot">
                            <p class="order-list__item-paid">
                                420 руб • оплата MC
                        </p>
                            <p class="order-list__item-bot-state ">
                                Повторить заказ
                        </p>
                        </div>
                    </div>

                    <div class="order-list__item">
                        <div class="order-list__item-top ">
                            <p class="order-list__item-num">Заказ 2390</p>
                            <p class="order-list__item-state">21 октября 2020, 13:40</p>
                        </div>
                        <div class="order-list__item-mid">
                            <p class="order-list__item-title">
                                Ленивая Маргарита
                        </p>
                            <p class="order-list__item-text">
                                30 см на толстом тесте• Томатный соус • Моцарелла • Томаты • Бекон
                        </p>
                        </div>
                        <div class="order-list__item-bot">
                            <p class="order-list__item-paid">
                                420 руб • оплата MC
                        </p>
                            <p class="order-list__item-bot-state ">
                                Повторить заказ
                        </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
