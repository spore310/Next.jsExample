import React from 'react'
import styles from './CharacterCard.module.scss'
import Image from 'next/image';
const CharacterCard = ({char, routeTo}:any) =>{
//id: ele.id, name:ele.name, image:ele.image, status: ele.status,species:ele.species
    return(
        <div className={styles.card}>
            <div className={styles.imageBorder}>
                <Image className={styles.image} src={char.image} layout='responsive' height={256} width={300}  quality={100}/>
            </div>
            <section className={styles["card-info"]}>
                <p>Name:  {char.name}</p>
                <p>Status:  {char.status}</p>
                <p>Species:  {char.species}</p>
                
                
            </section>
        </div>
    )
}

export default CharacterCard