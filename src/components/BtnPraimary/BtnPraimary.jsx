import React from "react";
import s from "./BtnPraimary.module.scss";

export default function BtnPraimary({ title, Click }) {
   return (
      <button onClick={() => Click()} className={s.root}>
         {title}
      </button>
   )
}
