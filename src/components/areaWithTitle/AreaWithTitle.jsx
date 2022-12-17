import React from 'react'
import s from './AreaWithTitle.module.scss'

const AreaWithTitle = React.forwardRef(({ title, onChange, onBlur, name, ...props }, ref) => (
   <div className={s.root}>
      <p className={s.title}>{title}</p>
      <textarea
         className={s.area}
         name={name}
         ref={ref}
         onChange={onChange}
         onBlur={onBlur}
         {...props}
      />
   </div>
))


export default AreaWithTitle
