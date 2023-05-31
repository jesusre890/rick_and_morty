import { connect, useDispatch } from 'react-redux';
import Card from './card/Card';
import styles from './Favorites.module.css'
import { filterCards, orderCards } from './redux/actions';
import { useState } from 'react';

// import styles from './Cards.module.css'
//LO TRAIGO IGUAL QUE EN CARDS


function Favorites( { myFavorites, onClose } ) {

   const [aux, setAux] = useState(false)
   
   const dispatch = useDispatch()

   const handleOrder = ( event ) => {
      dispatch( orderCards( event.target.value ) );
      aux ? setAux(false) : setAux(true)
   }
   const handleFilter = ( event ) => {
      dispatch( filterCards( event.target.value ) );
   }

   return (
      
      <div className={ styles.container }> 
         <div>
            <select name="order" onChange={handleOrder}>
               <option value="As">Ascendente</option>
               <option value="De">Descendente</option>
            </select>
            <select name="filter" onChange={handleFilter}>
               <option value="All">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         </div>
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