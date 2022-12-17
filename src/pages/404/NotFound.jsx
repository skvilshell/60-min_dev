import React from 'react'
import styles from './s.module.scss'
import { Link } from 'react-router-dom'

export default function NotFound() {
   return (
      <div className={styles.root}>
         <h1>404 error</h1>
         <h3>Not Found</h3>
         <Link to="/">Home</Link>
      </div>
   )
}
