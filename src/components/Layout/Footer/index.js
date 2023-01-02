import React from 'react'
import styles from '../../../styles/components/Layout/Footer.module.css'
import { AiOutlineCopyrightCircle  } from "react-icons/ai";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <AiOutlineCopyrightCircle />
      <p >Pablo Vinícius Sousa Silva</p>
    </div>
   
  )
}
