import React from 'react'
import { CardContato } from '../components/Object/CardContato'

import styles from '../styles/Contato.module.css'

export default function Contato() {
  return (
    <section id="ContatoSection" className={styles.container_contato}>
    <h2>Contato</h2>
    <p>Entra em contato em uma das opções abaixo</p>
  <div className={styles.container}>
   <CardContato />
  </div>
  </section>
  )
}
