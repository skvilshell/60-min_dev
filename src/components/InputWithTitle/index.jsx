import React from "react";
import styles from "./InputWithTitle.module.scss"

export default function InputWithTitle({ title, ...props }) {

    return (
        <div className={styles.root}  >
            <p className={styles.title}>{title}</p>
            <input
                {...props}
                className={styles.input}
            />
        </div>
    )
}

