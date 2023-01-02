import React from 'react'
import { DiJavascript, DiReact, DiPhp, DiPython,  DiCss3, DiSass, DiYii, DiDjango  } from "react-icons/di" ;   
import { Card } from '../components/Object/Card';
import styles from '../styles/Skill.module.css'

export default function Skill() {
  return (
    <section id="SkillSection" className={styles.container}>
    <h2>Skill</h2>
  <div className={styles.container_skill}>
    <div className={styles.card}>
    <Card 
        icone={<DiJavascript/>}
        text='JavaScript'/>
      </div>
      <div className={styles.card}>
      <Card 
          icone={<DiReact/>}
          text='React JS'/>
      </div>
      <div className={styles.card}>
          <Card 
        icone={<DiPhp/>}
        text='PHP'/>
      </div>
      <div className={styles.card}>
      <Card 
        icone={<DiPython/>}
        text='Python'/>
      </div>
      <div className={styles.card}>
      <Card 
          icone={<DiCss3/>}
          text='CSS'/>
    
      </div>
      <div className={styles.card}>
      <Card 
          icone={<DiSass/>}
          text='Sass'/>
      </div>
      <div className={styles.card}>
      <Card 
        icone={<DiYii/>}
        text='Yii'/>
      </div>
        <div className={styles.card}>
      <Card 
        icone={<DiYii/>}
        text='Yii'/>
      </div>
      
      
      
  </div>
  </section>
  )
}
