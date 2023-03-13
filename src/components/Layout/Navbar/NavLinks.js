import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/components/Layout/Navbar.module.css'
import { linkData } from "../../../../bd/LinkData";



export const NavLinks = () => {

  const [open, setOpen] = useState(false)


  return (
    <div className={styles.navbar_links}>
      <ul>
      {linkData.map((linkData, index) => (
      <Link 
      key={index}
      href={linkData.link}
      className={styles.botao}
      onClick={() => setOpen(!open)}> 
      
      {linkData.secao}</Link>
      ))}
      </ul>
     
    </div>
  )
}
