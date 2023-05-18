import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={() => props.onClose(props.id)}>x</button>
         </div>
         <Link to={`/detail/${props.id}`}>
            <div className={styles.dataContainer}>
               <h2>{props.name}</h2>
               <h4>{props.status}</h4>
               <h4>{props.specie}</h4>
               <h4>{props.gender}</h4>
               <h4>{props.origin}</h4>
            </div>
            <img src={props.image} alt='Image'/>
         </Link>
      </div>
   );
}
