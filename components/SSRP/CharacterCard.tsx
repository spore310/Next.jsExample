import React from 'react'
import styles from './CharacterCard.module.scss'
import Image from 'next/image';
import { style } from '@mui/system';
const CharacterCard = ({char, routeTo}:any) =>{
//id: ele.id, name:ele.name, image:ele.image, status: ele.status,species:ele.species
    return(
        <div className={styles.card}>
            <section className={char.status=="Alive" ? "" : styles["not-alive-img"]}>
                <Image className={styles.image} src={char.image}  height={300} width={300} quality={100}/>
            </section>
            <section className={styles["card-info"]}>
                <h2 className={styles.name}>{char.name}</h2>
                <div className={styles.status}>
                    <div className={styles[`character-status-${char.status.toLowerCase()}`]}></div>
                    <span>{char.status} - {char.species}</span>
                </div>
                <p className={styles.descriptor}>Last known location:</p>
                <p className={styles.description}>Test1</p>
                <p className={styles.descriptor}>First seen in:</p>
                <p className={styles.description}>Test2</p>
                
            </section>
        </div>
    )
}

export default CharacterCard