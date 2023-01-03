import React from 'react'
import styles from '../../styles/components/Object/CardSobre.module.css'
import { BsFillPersonFill, BsFillFilePersonFill, BsWhatsapp, BsGithub, BsLinkedin  } from "react-icons/bs";
import { MdEmail  } from "react-icons/md";


export const CardSobre = () => {
  return (
    <div className={styles.container_sobre}>
     <div className={styles.contatos}>
        <div className={styles.container_text}>
          Tenho 27 anos, comecei meus estudos em programação no ano de 2013,
          no curso técnico em informática para internet no ITEGO de Anápolis,  no ano de 2019 tive a oportunidade de colocar em pratica o que aprendi no curso, quando comecei em um estágio como desenvolvedor web, fiquei 2 anos na prefeitura de Anápolis e atualmente trabalho com suporte e busco voltar para área de programação.
        </div>
            <div className={styles.photo}></div>
            </div>
    </div>
  )
}
