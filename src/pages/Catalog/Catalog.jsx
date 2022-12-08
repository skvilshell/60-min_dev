import React, { useEffect, useState } from 'react'
import CardsJSON from '../../assets/db/catalog.json'
import Card from '../../components/Card'
import Carusel from '../../components/Carusel/Carusel'
import Residential from '../../components/Residential'
import Room from '../../components/Room'
import s from './catalog.module.scss'

const imgArray = [
   {
      url: "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      index: 0
   },
   {
      url: "https://images.unsplash.com/photo-1669518769047-3b40db6cb169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
      index: 1
   },
   {
      url: "https://images.unsplash.com/photo-1669518971786-7470f61f8782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=901&q=80",
      index: 2
   },
   {
      url: "https://images.unsplash.com/photo-1669484179894-4cfb13b51b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      index: 3
   },
   {
      url: "https://plus.unsplash.com/premium_photo-1664360496879-920b9ed618f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      index: 4
   },
   {
      url: "https://images.unsplash.com/photo-1669490893279-4589b3b1cf4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      index: 5
   },
   {
      url: "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      index: 6
   },
   {
      url: "https://images.unsplash.com/photo-1669394367856-30500a8c06d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      index: 7
   },
   {
      url: "https://plus.unsplash.com/premium_photo-1665159098317-368f0028e215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      index: 8
   }
]

export default function Catalog() {

   const resident = (<Residential
      title={'мать шлюха'}
      position={'kdsalkdmsalk'}
      rate={'rate'}
      description={'djashdjkas djfgdfg dfgdjashdj kasdjfgdfg dfgdjashdjkas djfgdfgdfgdj a shdjkasdjfgdfgd f gdjashdjkasd jfgd fgdfgdjash djkasdjfg dfgdfgdjashdjkasdj fgdfgdfgdjashdjk asdj f gdfg dfgdja shdjkasdjfgdfgdfgdjas hdjkasdjfgdfgdfgdj ashdjkasdj fg dfgdfgdjas hdjkasdjfgdfgdfgdjashdjkasdjf gdfgdfgdjashd jkasdjfgdfgdfgdjashdjkasdjfgdfgdfg'}
      inTime={'djashdjkasdjfgdfgdfg'}
      outTime={'djashdjkasdjfgdfgdfg'}
      features={['djashdjkasdjfgdfgdfg', 'djashdjkasdjfgdfgdfg', 'djashdjkasdjfgdfgdfg']}
      rendTitle={'djashdjkasdjfgdfgdfg'}
      metro={'djashdjkasdjfgdfgdfg'}
      clock={'djashdjkasdjfgdfgdfg'}
      numbers={'djashdjkasdjfgdfgdfg'}
      mainPrice={'1000'}
   />)


   const cards = CardsJSON.map((item, index) =>
      <Card
         key={index}
         title={item.title}
         position={item.position}
         metro={item.metro}
         time={item.time}
         price={item.price}
         size1={2}
      />
   )

   return (
      <div className={s.root}  >
         {cards}
      </div>
   )
}
