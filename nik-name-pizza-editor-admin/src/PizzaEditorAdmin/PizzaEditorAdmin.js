import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    cardNumber: yup.number("wrong value").positive().integer().required()
})

const normalizeCardNum = (value) => {
    console.log(value)
    return value.replace(/\s/g, '').match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
}

export default function PizzaEditorAdmin() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="cardNumber">Card number:</label>
                <input
                    placeholder="0000 0000 0000 0000"
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
            </div>
            <button>send</button>
        </form>
    )
}
