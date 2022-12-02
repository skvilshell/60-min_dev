import React from 'react'
import BtnPanel from '../../BtnPanel/BtnPanel'
import s from './PanelCategories.module.scss'
import { useDispatch } from 'react-redux'
import { setTypeRental, setTimeRental, setPrice } from '../../../redux/slices/filter'

export default function PanelCategories({ obj }) {
  const dispatch = [useDispatch(setTypeRental), useDispatch(setTimeRental), useDispatch(setPrice)]
  return (
    <div className={s.root}>
      {
        obj.items.map((items, index) => (
          <BtnPanel Click={() => dispatch[index](index)} key={index} title={items.title} />
        ))
      }
    </div>
  )
}
