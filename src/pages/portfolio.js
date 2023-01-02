import React from 'react'
import { CardPortfolio } from '../components/Object/CardPortfolio'
import Lista from '../public/lista.svg'
import Ecommerce from '../public/ecommerce.svg'
import Front from '../public/front.svg'
import styles from '../styles/Portfolio.module.css'

export default function Portfolio() {
  return (
    <div className={styles.container_portfolio}>
    <h2>Portfolio</h2>
  <div className={styles.container}>
    <CardPortfolio 
    title='Api lista'
    description='Api para criação de listas'
    link='https://github.com/PabloViniciusSS/Api_Listacompras'
    caminho={Lista}
    />

    <CardPortfolio 
          title='Api loja digital'
          description='Api para uma loja digital'
          link='https://github.com/PabloViniciusSS/Loja_API'
          caminho={Ecommerce}
          />
          
    <CardPortfolio 
          title='Levante-se'
          description='Aplicativo para exercicios'
          link='https://github.com/PabloViniciusSS/levante-se-next'
          caminho={Front}
          />

  </div>
  </div>
  )
}
