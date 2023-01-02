import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Nome from '../../../public/nome.png'
import styles from '../../../styles/components/Layout/Navbar.module.css'

export const Logo = () => {
  return (
    <Link href="/" >    <Image src={Nome} className={styles.nome}/>
    </Link>
  )
}
