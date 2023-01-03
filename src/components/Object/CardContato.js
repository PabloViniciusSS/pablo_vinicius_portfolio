import React from 'react'
import styles from '../../styles/components/Object/CardContato.module.css'
import { BsFillPersonFill, BsFillFilePersonFill, BsWhatsapp, BsGithub, BsLinkedin  } from "react-icons/bs";
import { MdEmail  } from "react-icons/md";


export const CardContato = (props) => {
  return (
    <div className={styles.container_contato}>
     <div className={styles.container_detalhes}>
              <a className={styles.detalhes}>
                {props.icone}
                  <p>{props.acesso}</p>
              </a>
      </div>
    </div>
  )
}
