import React from 'react'
import styles from '../../styles/components/Object/CardContato.module.css'
import { BsFillPersonFill, BsFillFilePersonFill, BsWhatsapp, BsGithub, BsLinkedin  } from "react-icons/bs";
import { MdEmail  } from "react-icons/md";
import Link from 'next/link';


export const CardContato = (props) => {
  return (
    <a href={props.link}  className={styles.container_detalhes}>
        <div className={styles.container_text}>
        <icon> {props.icone}</icon>
         </div>
            <div className={styles.photo}>
            <h4>{props.titulo}</h4>
              <p>{props.acesso}</p>
            </div>
  </a>
  
  )
}
