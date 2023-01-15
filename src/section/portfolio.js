import React from 'react'
import { CardPortfolio } from '../components/Object/CardPortfolio'
import { portfolioData } from "../../bd/PortfolioData";

import styles from '../styles/Portfolio.module.css'

export default function Portfolio() {
  return (
  <section id="PortfolioSection" className={styles.container_portfolio}>
  
    <h2>Portfólio</h2>
  <div className={styles.container}>
  {portfolioData.map((portfolioData, index) => (
    <CardPortfolio 
    key={index}
    title= {portfolioData.title}
    description= {portfolioData.description}
    link= {portfolioData.link}
    caminho= {portfolioData.caminho}
    />
    ))}
  </div>
  </section>
  )
}
