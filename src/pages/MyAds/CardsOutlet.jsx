import React from 'react'
import styles from './MyAds.module.scss'
import LKCard from '../../components/LKCard'

const ads = ["Отель", "Отель", "Отель", "Отель", "Отель", "Отель"]
export default function CardsOutlet() {
   return (
      <div className={styles.ads}>
         {ads.map((item, index) => (
            <LKCard key={index} title={item} />
         ))}
      </div>
   )
}
