import React from "react";
import s from "./BtnPraimary.module.scss";

export default function BtnPraimary({ title, Click, ...props }) {
   return (
      <button className={s.root} {...props} >
         {title}
      </button>
   )
}
