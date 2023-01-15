import React from 'react'
import { DiJavascript, DiReact, DiPhp, DiPython,  DiCss3, DiSass, DiYii, DiDjango  } from "react-icons/di" ;   
import { Card } from '../components/Object/Card';
import styles from '../styles/Skill.module.css'
import { skillData } from "../../bd/SkillData";

export default function Skill() {
  return (
    <section id="SkillSection" className={styles.container}>
    <h2>Skill</h2>
  <div className={styles.container_skill}>
  {skillData.map((skillData, index) => (
    <div className={styles.card} key={index}>
    <Card 
        icone={skillData.icone}
        text={skillData.text} />

      </div>
        ))}
  </div>
  </section>
  )
}
