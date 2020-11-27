import React from 'react'
import { Link } from 'react-router-dom'

export default function PizzaEditorLogin() {


    const handleSubmit = (event) => {
        event.preventDefault();
    };


    return (
        <div className="auth-form">
            <header className="payment-form__header">
                <Link to="/pizza-editor-login" className="payment-form__header-link"> </Link>
                <p className="payment-form__title">Авторизация</p>
            </header>
            <section className="auth-form">
                <div className="container">
                    <form className="auth-form__form" onSubmit={handleSubmit}>
                        <label className="auth-form__label">E-mail
                            <input type="email" className="auth-form__input" />
                        </label>
                        <label className="auth-form__label">Пароль
                            <input type="password" className="auth-form__input" />
                            {/* <input type="password" className="auth-form__input wrong" /> */}
                            <span className="auth-form__wrong wrong">Неправильный пароль</span>
                        </label>
                        <div className="auth-form__btn-inner active">
                            <Link to="/pizza-editor-registration" className="auth-form__btn  active">Войти</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
