import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react';
import PizzaStore from '../PizzaEditor/store/PizzaStore'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';




const normalizeCardNum = (value) => {
    return value.replace(/\s/g, '').match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
}

const normalizeCVV = (value) => {
    return value.replace(/\s/g, '').match(/.{1,4}/g)?.join(" ").substr(0, 3) || ""
}

const schema = yup.object().shape({
    address: yup.string().required("Введите адрес"),
    entrance: yup.number()
        .transform((cv, ov) => (ov === "" ? undefined : cv))
        .typeError("номер подъезда должен быть числом")
        .required("Введите номер подъезда"),
    floor: yup.number()
        .transform((cv, ov) => (ov === "" ? undefined : cv))
        .typeError("этаж должен быть числом")
        .required("Введите этаж"),
    apartment: yup.number()
        .transform((cv, ov) => (ov === "" ? undefined : cv))
        .typeError("квартира должна быть числом")
        .required("Введите номер квартиры"),
    cardNumber: yup.number()
        .transform((cv, ov) => (ov === "" ? undefined : cv))
        .typeError("номер карты должен быть числом")
        .required("Введите номер карты"),
    month: yup.number()
        .transform((cv, ov) => (ov === "" ? undefined : cv))
        .typeError("дата должна быть числом")
        .required("Введите дату"),
    CVV: yup.number()
        .transform((cv, ov) => (ov === "" ? undefined : cv))
        .typeError("CVV должен быть числом")
        .required("Введите CVV"),
    name: yup.string().required("Введите имя как на карте"),
});


function PaymentForm() {
    const { register, handleSubmit, errors, watch } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    })
    const values = watch()

    let fullAddress = { address: values.address, entrance: values.entrance, floor: values.floor, apartment: values.apartment }

    const onSubmit = (data) => {
        PizzaStore.cardNum = [...PizzaStore.cardNum, values.cardNumber]
        PizzaStore.address = fullAddress
    }

    const name = PizzaStore.toppings
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
        <div className="payment-form">
            <header className="payment-form__header">
                <Link to="/registration" className="payment-form__header-link"> </Link>
                <p className="payment-form__title">Оформление заказа</p>
            </header>
            <section className="payment-form__pizza">
                <div className="container">
                    <div className="payment-form__pizza-inner">
                        <p className="payment-form__pizza-title">Ленивая Маргарита</p>
                        <div className="payment-form__pizza-text">{pizzaItem}</div>
                        <p className="payment-form__pizza-price">{PizzaStore.FinalTotal} руб</p>
                    </div>
                </div>
            </section>
            <section className="payment-form__address">
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="payment-form__address-top">
                            <p className="payment-form__address-text">Адрес доставки</p>
                            <input
                                className="payment-form__address-input-big"
                                type="text"
                                placeholder="Введите адрес"
                                ref={register}
                                name="address"
                            />
                            {errors.address && <p>{errors.address.message}</p>}
                            <div className="payment-form__address-inner">
                                <label className="payment-form__address-input-label">подъезд
                                    <input
                                        className="payment-form__address-input"
                                        type="text"
                                        ref={register}
                                        name="entrance"
                                    />
                                    {errors.entrance && <p>{errors.entrance.message}</p>}
                                </label>
                                <label className="payment-form__address-input-label">этаж
                                    <input
                                        className="payment-form__address-input"
                                        type="text"
                                        ref={register}
                                        name="floor"
                                    />
                                    {errors.floor && <p>{errors.floor.message}</p>}
                                </label>
                                <label className="payment-form__address-input-label">квартира
                                    <input
                                        className="payment-form__address-input"
                                        type="text"
                                        ref={register}
                                        name="apartment" />
                                    {errors.apartment && <p>{errors.apartment.message}</p>}
                                </label>
                            </div>
                        </div>
                        <div className="payment-form__address-bot">
                            <p className="payment-form__address-text">Данные для оплаты</p>
                            <input
                                placeholder="Номер карты"
                                className="payment-form__address-input-big"
                                type="tel"
                                inputMode="numeric"
                                autoComplete="cc-number"
                                name="cardNumber"
                                id="cardNumber"
                                ref={register}
                                onChange={(e) => {
                                    const { value } = e.target
                                    e.target.value = normalizeCardNum(value)
                                }}
                            />
                            {errors.cardNumber && <p>{errors.cardNumber.message}</p>}
                            <div className="payment-form__address-small-inner">
                                <input
                                    type="number"
                                    placeholder="MM/YYYY"
                                    className="payment-form__address-input-small payment-form__address-input-date"
                                    ref={register}
                                    name="month"
                                />
                                {errors.month && <p>{errors.month.message}</p>}
                                <input
                                    placeholder="CVV"
                                    className="payment-form__address-input-small"
                                    ref={register}
                                    name="CVV"
                                    onChange={(e) => {
                                        const { value } = e.target
                                        e.target.value = normalizeCVV(value)
                                    }}
                                />
                                {errors.CVV && <p>{errors.CVV.message}</p>}
                            </div>
                            <input
                                type="text"
                                placeholder="Имя как на карте"
                                className="payment-form__address-input-big payment-form__address-input-name"
                                ref={register}
                                name="name"
                            />
                            {errors.name && <p>{errors.name.message}</p>}
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
                            <p className="footer-top__price">{PizzaStore.FinalTotal} руб</p>
                        </div>
                        <div className="footer-top__text-inner">
                            <p className="footer-top__text">Доставка</p>
                            <p className="footer-top__price">180 руб</p>
                        </div>
                    </div>
                    <div className="footer-bot">
                        <div className="footer-bot__text-inner">
                            <p className="footer-bot__text">К оплате</p>
                            <p className="footer-bot__price">{PizzaStore.FinalTotal + 180} руб</p>
                        </div>
                        <div className="footer-bot__btn-inner active">
                            <Link to="/registration" className="footer-bot__btn active" onClick={onSubmit}>Оплатить {PizzaStore.FinalTotal + 180} руб</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default (observer(PaymentForm));