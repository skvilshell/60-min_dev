import React from "react";
import styles from "./InputWithTitle.module.scss"

const InputWithTitle = React.forwardRef(({ title, onChange, onBlur, name, ...props }, ref) => (
    <div className={styles.root}  >
        <p className={styles.title}>{title}</p>
        <input
            className={styles.input}
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            {...props}
        />
    </div>
)
)





export default InputWithTitle
