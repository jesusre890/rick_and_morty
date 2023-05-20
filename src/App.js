import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/About.jsx";
import Cards from "./components/cards/Cards.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";
import Nav from "./components/nav/Nav";

function App() {
  const [characters, setCharacters] = useState( [] );
  const [access, setAccess] = useState( false );
  
  const EMAIL = 'jesusre890@gmail.com'
  const PASSWORD = 'henry2023'
  
  const navigate = useNavigate();

  function login(userData){
      if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
   }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onSearch = id => {
    // copiado ejercicio 7
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(characters.filter((caracter) => caracter.id !== Number(id)));
   };

  const location = useLocation();
  //console.log(location);

  return (
    <div className="App">
      {
        location.pathname !== "/"
        ? <Nav onSearch={ onSearch } />
        : null
      }

      <hr />
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
