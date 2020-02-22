import React from 'react'

import { cardData } from '../data'

import CourseCard from './course-card'
import styles from '../styles/card-group.module.css'

const CardGroup = () => (
  <div className={styles.cardGroup}>
    <h2>8 courses, more to come!</h2>
    <div className={styles.cardGrid}>
      {cardData.map(({ title, content, image }, index) => (
        <CourseCard title={title} content={content} image={image} key={index} />
      ))}
    </div>
  </div>
)

export default CardGroup
