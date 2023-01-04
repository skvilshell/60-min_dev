import React from 'react'
import s from './checkbox.module.scss'

const Checkbox = React.forwardRef(({ onChange, onBlur, name, value, text, id, ...props }, ref) =>
(<div>
   <input
      type="checkbox"
      id={id}
      value={value}
      className={s.checkbox}
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
   />
   <label htmlFor={id} className={s.root}>
      {text}
   </label>
</div>
)
)

export default Checkbox