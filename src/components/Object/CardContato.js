import React from 'react'
import styles from '../../styles/components/Object/CardContato.module.css'
import { BsFillPersonFill, BsFillFilePersonFill, BsWhatsapp, BsGithub, BsLinkedin  } from "react-icons/bs";
import { MdEmail  } from "react-icons/md";


export const CardContato = (props) => {
  return (
    <div className={styles.container_contato}>
                <a className={styles.detalhes} href={props.link}>
                 <icon> {props.icone}</icon>
                  <h3>{props.titulo}</h3>
                    <p>{props.acesso}</p>
                </a>
    </div>
  )
}
