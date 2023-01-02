import React from 'react'
import styles from '../../styles/components/Object/Card.module.css'


export const Card = (props) => {
  return (
    <div className={styles.container_card}>
        <span>{props.icone}</span>
        <p>{props.text}</p>
    </div>
  )
}
