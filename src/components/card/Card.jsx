import styles from './Card.module.css'

export default function Card({name, status, specie, gender, origin, image, onClose}) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={onClose}>X</button>
         </div>
         <div className={styles.dataContainer}>
            <h2>{name}</h2>
            <h4>{status}</h4>
            <h4>{specie}</h4>
            <h4>{gender}</h4>
            <h4>{origin}</h4>
         </div>
         <img src={image} alt=''/>
      </div>
   );
}
