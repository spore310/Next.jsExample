import React from 'react'
import styles from './CharacterCard.module.scss'
import Image from 'next/image';
const CharacterCard = ({char, routeTo}:any) =>{
//id: ele.id, name:ele.name, image:ele.image, status: ele.status,species:ele.species
    return(
        <div className={styles.card}>
            <section >
                <Image className={styles.image} src={char.image}  height={300} width={300} quality={100}/>
            </section>
            <section className={styles["card-info"]}>
                <p>Name:  {char.name}</p>
                <p>Status:  {char.status}</p>
                <p>Species:  {char.species}</p>
                
            </section>
        </div>
    )
}

export default CharacterCard