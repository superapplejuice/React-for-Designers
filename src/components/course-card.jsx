import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/course-card.module.css'

const CourseCard = ({ title, content, image }) => (
  <div className={styles.card}>
    <img src={image} />
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
)

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default CourseCard
