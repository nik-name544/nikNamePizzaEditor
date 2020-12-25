import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export default function PizzaEditorLogin() {


    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    })
 

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    };


    return (
        <div className="auth-form">
            <header className="payment-form__header">
                <a href="#" className="payment-form__header-link"></a>
                {/* <Link to="/pizza-editor-login" className="payment-form__header-link"> </Link> */}
                <p className="payment-form__title">Авторизация</p>
            </header>
            <section className="auth-form">
                <div className="container">
                    <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                        <label className="auth-form__label">E-mail
                            <div>
                                <input
                                    type="text" 
                                    className="auth-form__input"
                                    ref={register}
                                    name="email"
                                />
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>
                        </label>
                        <label className="auth-form__label">Пароль
                            <div>
                                <input
                                    type="password"
                                    className="auth-form__input"
                                    // className="auth-form__input wrong"
                                    ref={register}
                                    name="password"
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div> 
                            <span className="auth-form__wrong wrong">Неправильный пароль</span>
                        </label>
                        <div className="auth-form__btn-inner active">
                            <a href="#" className="auth-form__btn  active">Войти</a>
                            {/* <Link to="/pizza-editor-registration" className="auth-form__btn  active">Войти</Link> */}
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
