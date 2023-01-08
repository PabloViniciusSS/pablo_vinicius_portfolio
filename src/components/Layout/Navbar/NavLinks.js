import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/components/Layout/Navbar.module.css'



export const NavLinks = () => {
  return (
    <div className={styles.navbar_links}>
      <ul>
      

      <Link href="#SkillSection" className={styles.botao}> Skill</Link>
      <Link href="#SobreSection"className={styles.botao}> Sobre</Link>
      <Link href="#PortfolioSection" className={styles.botao}> Portfolio</Link>

      </ul>
     
    </div>
  )
}
