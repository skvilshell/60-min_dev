import React from 'react'
import styles from './Tab.module.scss'

const Tab = React.forwardRef(({ onChange, onBlur, name, label, title, value, id, ...props }, ref) => (
   <div className={styles.root}>
      <input
         id={id}
         type="radio"
         value={value}
         className={styles.property_input}
         name={name}
         ref={ref}
         onChange={onChange}
         onBlur={onBlur}
         {...props}
      />
      <label
         className={styles.property_label}
         htmlFor={id}
      >
         {title}
      </label>
   </div>
))



export default Tab