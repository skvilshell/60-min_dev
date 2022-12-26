import React, { useState } from "react";
import InputWithTitle from "../../components/InputWithTitle";
import styles from "./s.module.scss"
import BtnSecondary from "../../components/BtnSecondary";
import { Link } from "react-router-dom"
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";


export default function SignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
    });

    const [errAuth, setErrAuth] = useState(false)

    const onSubmit = data => {
        axios({
            method: 'post',
            url: 'https://60-min.ru/login',
            data: data
        }).then(res => {
            console.log(res)
            setErrAuth(false)
        })
            .catch(e => setErrAuth(true))
    }


    return (
        <form
            className={styles.root}
            onSubmit={handleSubmit(onSubmit)}>

            <h3 className={styles.title}>Вход в личный кабинет</h3>
            <div className={styles.inputs}>

                <InputWithTitle
                    title="Введите e-mail"
                    type="email"
                    {...register("email", {
                        required: "Это обязательное поле",
                    })}
                />
                {errors?.email && <p className={styles.error}>заполните поле</p>}
                {errAuth && <p className={styles.error}>не правильный логин или пароль</p>}
                <InputWithTitle
                    title="Введите пароль"
                    type="password"
                    {...register("password", {
                        required: "Это обязательное поле",
                    })}
                />
                {errors?.password && <p className={styles.error}>заполните поле</p>}

                {/*//! <p className={styles.forgot}>Забыли пароль?</p> */}
                <label htmlFor="memory">
                    <input
                        type="checkbox"
                        id="memory"
                        className={styles.memory}
                        name="memory"
                    />
                    Запомнить меня
                </label>
            </div>
            <div className={styles.buttons}>
                <BtnPraimary type="submit" title={"вход"} />
                <Link to="/register" ><BtnSecondary title={"регистрация"} /></Link>
            </div>
        </form>
    )
}