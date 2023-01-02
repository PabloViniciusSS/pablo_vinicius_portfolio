import React from 'react'
import { CardSobre } from '../components/Object/CardSobre'
import styles from '../styles/Sobre.module.css'

export default function Sobre() {
  return (
    <section id="SobreSection" className={styles.container}>
    <h2>Sobre</h2>
    <div className={styles.container_sobre}>
      <CardSobre/>
    </div>
  </section>
  )
}
