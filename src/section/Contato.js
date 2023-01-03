import React from 'react'
import { CardContato } from '../components/Object/CardContato'
import {  BsWhatsapp, BsGithub, BsLinkedin  } from "react-icons/bs";

import styles from '../styles/Contato.module.css'

export default function Contato() {
  return (
    <section id="ContatoSection" className={styles.container_contato}>
    <h2>Contato</h2>
    <p>Entra em contato em uma das opções abaixo</p>
  <div className={styles.container_card}>
      <div className={styles.container}>
          <CardContato
          icone={<BsWhatsapp/>}
          titulo="WhatsApp"
          link="(62)993296503"
          acesso="(62)993296503"
          />
      </div>
      <div className={styles.container}>
          <CardContato
          icone={<BsGithub/>}
          titulo="Git"
          link="https://github.com/PabloViniciusSS"
          acesso="/PabloViniciusSS"
          />
      </div>
      <div className={styles.container}>
          <CardContato
          icone={<BsLinkedin/>}
          titulo="LinkeInd"
          link="https://www.linkedin.com/in/pabloviniciusss/"
          acesso="/pabloviniciusss"
          />
      </div>
    </div>
  </section>
  )
}
