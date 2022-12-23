import React, { useState } from "react";
import InputWithTitle from "../../components/InputWithTitle";
import styles from "./s.module.scss"
import BtnSecondary from "../../components/BtnSecondary";
import { Link } from "react-router-dom"
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";


export default function SignIn() {

    const { handleSubmit, control } = useForm();

    const onSubmit = data => {
        axios({
            method: 'post',
            url: 'https://60-min.ru/login',
            data: data
        }).then(res => console.log(res))
    }


    return (
        <form
            className={styles.root}
            onSubmit={handleSubmit(onSubmit)}>

            <h3 className={styles.title}>Вход в личный кабинет</h3>
            <div className={styles.inputs}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <InputWithTitle
                            title={"Введите e-mail"}
                            placeholder="example@exapmle.com"
                            onChange={(e) => field.onChange(e)}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <InputWithTitle
                            title={"Введите пароль"}
                            placeholder="example"
                            onChange={(e) => field.onChange(e)}
                            type="password"
                        />
                    )}
                />
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