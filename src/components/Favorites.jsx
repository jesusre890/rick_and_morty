import { connect } from 'react-redux';
import Card from './card/Card';
import styles from './Favorites.module.css'

// import styles from './Cards.module.css'
//LO TRAIGO IGUAL QUE EN CARDS


function Favorites({myFavorites, onClose}) {

   return (
      <div className={styles.container}> 
         {
            myFavorites.map(i => 
               <Card
               key= {i.id}
               id={i.id}
               name={i.name}
               status={i.status}
               specie={i.species}
               gender={i.gender}
               origin={i.origin.name}
               image={i.image}
               onClose={onClose}
               />
            )
         }
      </div>
   );
}

const mapStateToProps = ( state ) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(mapStateToProps, null)(Favorites)