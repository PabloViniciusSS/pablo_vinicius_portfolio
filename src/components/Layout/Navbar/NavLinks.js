import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/components/Layout/Navbar.module.css'
import { linkData } from "../../../../bd/LinkData";



export const NavLinks = () => {

  return (
    <div className={styles.navbar_links}>
      <ul>
      {linkData.map((linkData, index) => (
      <Link 
      key={index}
      href={linkData.link}
      className={styles.botao}> 
      
      {linkData.secao}</Link>
      ))}
      </ul>
     
    </div>
  )
}
