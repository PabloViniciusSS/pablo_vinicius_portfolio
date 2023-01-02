import Image from 'next/image'
import React from 'react'
import Nome from '../../../public/nome.png'
import styles from '../../../styles/components/Layout/Navbar.module.css'

export const Logo = () => {
  return (
    <Image src={Nome} className={styles.nome}/>
  )
}
