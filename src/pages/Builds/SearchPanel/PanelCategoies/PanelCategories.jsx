import React from 'react'
import BtnPanel from '../../../../components/BtnPanel/BtnPanel'
import s from './PanelCategories.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setTimeRental, setTypeRental, setPrice } from '../../../../redux/slices/filter'


export default function PanelCategories({ obj, setActiveEl }) {
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
  const typeRental = useSelector(state => state.filter.typeRental.name)
  const timeRental = useSelector(state => state.filter.timeRental.name)
  const price = useSelector(state => state.filter.price.name)
  return (
    <div className={(obj.type == 1 || obj.type == 2) ? s.right : s.root}>
      {
        obj.items.map((items, index) => (
          <BtnPanel
            Click={() => {
              switchDispatch(index)
              setActiveEl(0)
            }}
            key={index}
            title={items.name}
            ClassName={(items.name == typeRental || items.name == timeRental || items.name == price) && s.active}
          />
        ))
      }
    </ div>
  )
}
