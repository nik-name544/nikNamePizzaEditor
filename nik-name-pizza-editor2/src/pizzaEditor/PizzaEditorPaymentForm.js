import React from 'react'
import { Link } from 'react-router-dom'


export default function PizzaEditorPaymentForm() {
    return (
        <div className="payment-form">
            <header className="payment-form__header">
                <Link to="/pizza-editor-registration" className="payment-form__header-link"> </Link>
                <p className="payment-form__title">Оформление заказа</p>
            </header>
            <section className="payment-form__pizza">
                <div className="container">
                    <div className="payment-form__pizza-inner">
                        <p className="payment-form__pizza-title">Ленивая Маргарита</p>
                        <p className="payment-form__pizza-text">30 см на толстом тесте• Томатный соус • Моцарелла • Томаты • Бекон</p>
                        <p className="payment-form__pizza-price">420 руб</p>
                    </div>
                </div>
            </section>
            <section className="payment-form__address">
                <div className="container">
                    <form>
                        <div className="payment-form__address-top">
                            <p className="payment-form__address-text">Адрес доставки</p>
                            <input className="payment-form__address-input-big" type="text" placeholder="Введите адрес" />

                            <div className="payment-form__address-inner">
                                <label className="payment-form__address-input-label">подъезд
                                <input className="payment-form__address-input" type="text" />
                                </label>
                                <label className="payment-form__address-input-label">этаж
                                <input className="payment-form__address-input" type="text" />
                                </label>
                                <label className="payment-form__address-input-label">квартира
                                <input className="payment-form__address-input" type="text" />
                                </label>
                            </div>
                        </div>
                        <div className="payment-form__address-bot">
                            <p className="payment-form__address-text">Данные для оплаты</p>
                            <input type="number" placeholder="Номер карты" className="payment-form__address-input-big" />
                            <div className="payment-form__address-small-inner">
                                <input type="number" placeholder="MM/YYYY" className="payment-form__address-input-small payment-form__address-input-date" />
                                <input placeholder="CVV" className="payment-form__address-input-small" />
                            </div>
                            <input type="text" placeholder="Имя как на карте" className="payment-form__address-input-big payment-form__address-input-name" />
                        </div>
                    </ form>
                    <p className="payment-form__address-bot-text">Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер не бросает.</p>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-top__text-inner">
                            <p className="footer-top__text">Стоимость заказа</p>
                            <p className="footer-top__price">420 руб</p>
                        </div>
                        <div className="footer-top__text-inner">
                            <p className="footer-top__text">Доставка</p>
                            <p className="footer-top__price">180 руб</p>
                        </div>
                    </div>
                    <div className="footer-bot">
                        <div className="footer-bot__text-inner">
                            <p className="footer-bot__text">К оплате</p>
                            <p className="footer-bot__price">600 руб</p>
                        </div>
                        <div className="footer-bot__btn-inner active">
                            <Link to="/pizza-editor-registration" className="footer-bot__btn active">Оплатить 600 руб</Link>
                        </div>
                    </div>
                </div>
            </footer> 
        </div>
    )
}
