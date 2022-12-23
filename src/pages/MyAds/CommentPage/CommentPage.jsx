import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Reviews__score from '../../../components/Reviews__score';
import styles from './CommentPage.module.scss'
import Comment from '../../../components/Comment';

export default function CommentPage() {
   const { id } = useParams()
   const [comments, setComments] = useState([])

   useEffect(() => {
      axios({
         method: 'get',
         url: 'https://60-min.ru/getProperty',
         params: {
            id: id
         }
      }).then(res => {
         setComments(res.data?.comments)
         console.log(comments);
      })
   }, [])

   return (
      <div className={styles.root}>
         <h2 className={styles.reviews__title}>Отзывы</h2>
         <div className={styles.reviews__scores}>
            {reviews__scores.map((item, index) => (
               <Reviews__score title={item.title} key={index} score={item.score} />
            ))}
         </div>
         <div className={styles.comments}>
            {
               comments?.map((item) => (
                  <Comment
                     key={item.id}
                     name={item.name}
                     rate={item.status}
                     positive={item.like}
                     negative={item.dislike} />
               ))
            }

         </div>
      </div>
   )
}


//! static
const reviews__scores = [
   { title: "Чистота", score: 5 },
   { title: "Местоположение", score: 4.5 },
   { title: "Персонал", score: 4.2 },
   { title: "цена-качество", score: 2 }
]