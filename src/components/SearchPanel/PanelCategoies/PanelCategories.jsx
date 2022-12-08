import React from 'react'
import BtnPanel from '../../BtnPanel/BtnPanel'
import s from './PanelCategories.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setTypeRental, setTimeRental, setPrice } from '../../../redux/slices/filter'

export default function PanelCategories({ obj,setActiveEl }) {
  const dispatch = useDispatch()
  const switchDispatch = (index) => {
    switch (obj.type) {
      case 0:
        return dispatch(setTypeRental(obj.items[index]))
      case 1:
        return dispatch(setTimeRental(obj.items[index]))
      case 2:
        return dispatch(setPrice(obj.items[index]))
    }
  }
  const typeRental = useSelector(state => state.filter.typeRental.title)
  const timeRental = useSelector(state => state.filter.timeRental.title)
  const price = useSelector(state => state.filter.price.title)
  return (
    <div className={(obj.type == 1 || obj.type == 2) ? s.right : s.root}>
      {
        obj.items.map((items, index) => (
          <BtnPanel
            Click={() =>{
              switchDispatch(index)
              setActiveEl(0)
            } }
            key={index}
            title={items.title}
            ClassName={(items.title == typeRental || items.title == timeRental || items.title == price) && s.active}
          />
        ))
      }
    </ div>
  )
}
