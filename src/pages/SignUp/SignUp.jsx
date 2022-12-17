import React, { useState } from "react";
import InputWithTitle from "../../components/InputWithTitle";
import styles from "./s.module.scss"
import BtnPraimary from "../../components/BtnPraimary/BtnPraimary";
import BtnSecondary from "../../components/BtnSecondary";
import { Link } from "react-router-dom"
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

export default function SignUp() {

    const { handleSubmit, control, register, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
            <h3 className={styles.title}>Регистрация</h3>
            <div className={styles.inputs}>
                {/* //*"Имя", "Номер телефона", "E-mail", "Пароль", "Подтвердите пароль" */}
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <InputWithTitle
                            title={"Имя"}
                            placeholder="Артем"
                            onChange={(e) => field.onChange(e)}
                        />
                    )}
                />
                <Controller
                    name="phonenumber"
                    control={control}
                    render={({ field }) => (
                        <InputWithTitle
                            title={"Номер телефона"}
                            placeholder="+7 888 777 1234"
                            onChange={(e) => field.onChange(e)}
                            type="tel"
                            pattern="\+?[0-9\s\-\(\)]+"
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <InputWithTitle
                            title={"Введите e-mail"}
                            placeholder="example@exapmle.com"
                            onChange={(e) => field.onChange(e)}
                            type="email"
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <InputWithTitle
                            type="password"
                            title={"Введите пароль"}
                            placeholder=""
                            onChange={(e) => field.onChange(e)}
                        />
                    )}
                />


            </div>
            <div className={styles.buttons}>
                <BtnPraimary type="submit" title={"регистрация"} />
                <Link to="/login" >
                    <BtnSecondary className={styles.reg} title={"логин"} />
                </Link>
            </div>
        </form>
    )
}