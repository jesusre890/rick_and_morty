import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = event => {
      const {value} = event.target;
      setId(value);
      // console.log("id: ", id);
   }

   const handleOnClick = event => {
      event.preventDefault()
      props.onSearch( id )
      setId('')//saca el numero que uno coloca cuando busca
   }

   return (
      <div className={styles.container}>
         <input 
            value={id}
            type= 'text'
            name= "search"
            id='search'
            placeholder='Introduzca un ID'
            onChange={handleChange}
         />
         <button onClick={handleOnClick}>Buscar</button>
      </div>
   );
}

//() => props.onSearch(id)(esto iba en el onCLick)
