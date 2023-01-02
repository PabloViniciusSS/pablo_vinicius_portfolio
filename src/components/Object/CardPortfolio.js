import styles from '../../styles/components/Object/CardPortfolio.module.css'
import React from 'react'
import Image from 'next/image'
import { Button } from './Button'

export const CardPortfolio = (props) => {
  return (
    <div className={styles.container_card}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <div className={styles.container_img}>
      <Button 
      href={props.link}
      text='Veja mais'
      
      />
       <Image className={styles.img} src={props.caminho} />
      </div>
    </div>
  )
}
