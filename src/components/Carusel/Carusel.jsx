import React from 'react'
import s from './carusel.module.scss'
import { useState, useEffect } from 'react'
import arrow from '../../assets/img/arrow.svg'





export default function Carusel({ arr }) {


   const [currentImg, setCurrentImg] = useState(0)
   const [pageGallery, setPageGallery] = useState(0)
   const [translatePage, setTranslatePage] = useState(0)
   const maxPageGallery = Math.ceil(arr.length / 4)

   const arrowLeftCarusel = (
      <img
         className={s.arrowLeft}
         src={arrow}
         alt=""
         onClick={() => setCurrentImg(currentImg - 1)}
      />
   )

   const arrowRightCarusel = (
      <img
         className={s.arrowRight}
         src={arrow}
         alt=""
         onClick={() => setCurrentImg(currentImg + 1)}
      />
   )

   const arrowRight = (
      <img
         className={s.arrowRight}
         src={arrow}
         alt=""
         onClick={() => {
            if (pageGallery == 0) {
               setPageGallery(1)
               setTranslatePage(-375)
            } else {
               setTranslatePage(translatePage - 400)
               setPageGallery(pageGallery + 1)
            }
         }}
      />
   )

   const arrowLeft = (
      <img
         className={s.arrowLeft}
         src={arrow}
         alt=""
         onClick={() => {
            if (pageGallery == 1) {
               setPageGallery(0)
               setTranslatePage(0)
            } else {
               setTranslatePage(translatePage + 400)
               setPageGallery(pageGallery - 1)
            }
         }}
      />
   )

   const box = (
      <div className={s.box}></div>
   )


   return (
      <div className={s.root}>
         <div className={s.carusel}>
            {(currentImg != 0) && arrowLeftCarusel}
            <div className={s.container}>
               {
                  arr.map(img => (
                     <div
                        className={s.window}
                        key={img.index}
                        style={{
                           transform: `translateX(-${currentImg * 100}%)`,
                        }}
                     >
                        <img className={s.img} src={img.url} alt="" />
                     </div>
                  ))
               }
            </div>
            {(currentImg != arr.length - 1) && arrowRightCarusel}
         </div>
         <div className={s.gallery}>
            {(pageGallery != 0) ? arrowLeft : box}
            <div className={s.container}>
               {
                  arr.map((img) => (
                     <div
                        key={img.index}
                        className={s.window}
                        onClick={() => setCurrentImg(img.index)}
                        style={{
                           transform: `translateX(${translatePage}%)`
                        }}
                     >
                        <img
                           className={(currentImg == img.index) && s.active}
                           src={img.url}
                           alt=""
                        />
                     </div>
                  ))
               }
            </div>
            {(pageGallery != maxPageGallery - 1) ? arrowRight : box}
         </div>
      </div>
   )
}
