import './App.css';
import axios from 'axios';
import { useState } from 'react';
import About from './components/about/About.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail.jsx';
import Nav from './components/nav/Nav';
import { Route, Routes } from 'react-router-dom';





function App() {

   const [characters, setCharacters] = useState([]);
   //estado => characters = [{-}, {-}];

   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };

   const onSearch = id => { // copiado ejercicio 7
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = id => {
      setCharacters(characters.filter(caracter => 
         caracter.id !== Number(id)))
   }

   return (
      <div className='App'>

         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={ <About />} />
            <Route path='/detail/:id' element={ <Detail /> }/>
         </Routes>

      </div>
   );
}

export default App;
