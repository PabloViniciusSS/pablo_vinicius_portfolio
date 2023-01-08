import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Apresentacao from '../section/apresentacao'
import Portfolio from '../section/portfolio'
import Skill from '../section/skill'
import Sobre from '../section/sobre'
import { CardContato } from '../components/Object/CardContato'
import Contato from '../section/Contato'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pablo Vinícius</title>
        <meta name="Developer" content="Site portfolio de Desenvolvedor Front-End, Webdesigner, UI, UX" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <Apresentacao />
        <Skill />
        <Sobre />
        <Portfolio />
        <Contato />
       </main>
    </div>
  )
}
