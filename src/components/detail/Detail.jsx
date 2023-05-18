import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Detail(props) {
    const { id } = useParams();
    const [ character, setCharacter ] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
              //console.log(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     console.log('character desde detail: ', character);
    return (
        <div>
            <h1>DETAIL</h1>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h3>Origin | {character.origin?.name}</h3>{/*el ? es como in ternario*/}
            <h3>Specie | {character.species}</h3>
            <h3>Gender | {character.gender}</h3>
        </div>
    )
}

