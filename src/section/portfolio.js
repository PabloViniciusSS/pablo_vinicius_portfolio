import React from 'react'
import { CardPortfolio } from '../components/Object/CardPortfolio'

import styles from '../styles/Portfolio.module.css'

export default function Portfolio() {
  return (
    <section id="PortfolioSection" className={styles.container_portfolio}>
    <h2>Portfólio</h2>
  <div className={styles.container}>
    <CardPortfolio 
    title='Api lista'
    description='Api para criação de listas'
    link='https://github.com/PabloViniciusSS/Api_Listacompras'
    caminho='/lista.svg'
    />

    <CardPortfolio 
          title='Api loja digital'
          description='Api para uma loja digital'
          link='https://github.com/PabloViniciusSS/Loja_API'
          caminho='/ecommerce.svg'
          />
          
    <CardPortfolio 
          title='Levante-se'
          description='Aplicativo para exercicios'
          link='https://github.com/PabloViniciusSS/levante-se-next'
          caminho='/front.svg'
          />

  </div>
  </section>
  )
}
