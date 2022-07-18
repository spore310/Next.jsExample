import React from 'react'
import styles from './CharacterCard.module.scss'

const CharacterCard = ({char, routeTo}:any) =>{
//id: ele.id, name:ele.name, image:ele.image, status: ele.status,species:ele.species
    return(
        <div className={styles.card}>
            <section>
                <img className={styles.image} src={char.image}/>
            </section>
            <section className={styles["card-info"]}>
                <p>{char.name}</p>
                <p>{char.status}</p>
                <p>{char.species}</p>
                
            </section>
        </div>
    )
}

export default CharacterCard