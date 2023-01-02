import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../../styles/components/Layout/Navbar.module.css'

export const Logo = () => {
  return (
    <Link href="/" >    <Image src='src\public\Nome.png' className={styles.nome}/>
    </Link>
  )
}
