import React from 'react'
import styles from '../../styles/components/Object/Button.module.css'

export const Button = (props) => {
  return (
      <a className={styles.button} href={props.href}>{props.text}</a>

  )
}
