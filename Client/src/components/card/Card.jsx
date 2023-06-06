import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card( props ) { //props es todo lo que hay en cards
   console.log('props de Cards:', props );
   //props = {addFav: f(character), removeFav(id)}
   const [isFav, setIsFav] = useState( false );

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if ( isFav ) { //si es true pasa lo siguiente
         setIsFav( false );
         props.removeFav( props.id );
      } else {
         setIsFav( true ); //lo seteo en true
         props.addFav(props)
      }
   }

   return (
     <div className={styles.container}>
       <div className={styles.buttonContainer}>
         {isFav ? (
           <button onClick={handleFavorite}>❤️</button>
         ) : (
           <button onClick={handleFavorite}>🤍</button>
         )}
         <button onClick={() => props.onClose(props.id)}>x</button>
       </div>
       <Link to={`/detail/${props.id}`}>
         <div className={styles.dataContainer}>
           <h2>{props.id}</h2>
           <h2>{props.name}</h2>
           <h4>{props.status}</h4>
           <h4>{props.specie}</h4>
           <h4>{props.gender}</h4>
           <h4>{props.origin}</h4>
         </div>
         <img src={props.image} alt="Image" />
       </Link>
     </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = ( dispatch ) => {
   return {
      addFav: ( character ) => dispatch( addFav( character ) ),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect( mapStateToProps, mapDispatchToProps )( Card );
