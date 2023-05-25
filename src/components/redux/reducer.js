import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

const initialState = {
    myFavorites: [], // que renderizo
    allCharacters: [] // todos mis favoritos
};
// [{id: 1}, {id: 2}, ...]

export default function reducer(
    state = initialState,
    { type, payload } //action = { type, payload }
) {
    switch ( type ) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case REMOVE_FAV:
            const filteredFavs = state.allCharacters.filter(
                fav => fav.id !== Number(payload)
            )
            return {
                ...state,
                myFavorites: filteredFavs,
                allCharacters: filteredFavs
            }
        case FILTER:
            //EXTRA: => Caso 'ALL'
            if ( payload === 'All' ) return {
                ...state,
                myFavorites: state.allCharacters
            }
            const allCharactersCopy = [...state.allCharacters]
            const filteredCharacters = allCharactersCopy.filter(
                character => character.gender === payload
            )
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case ORDER:
            let orderedCharacters = [...state.allCharacters]
            if ( payload === 'As' ) {
                orderedCharacters = state.allCharacters.sort(
                    (a, b) => a.id - b.id
                )
            } else if ( payload === 'De' ) {
                orderedCharacters = state.allCharacters.sort(
                    ( a, b ) => b.id - a.id
                )
            }
            return {
                ...state,
                myFavorites: orderedCharacters
            }
        default:
            return { ...state } // con ... devuelvo un nuevo objeto del estado
    }
}


/*
myFavorites = [ {F}, {F}, {M}, {F}. {G} ] 
               1 -> guarda y remueve favoritos
               2 -> que renderizar !!!

               antes del filter hacemos una copia

allCharacters = [ {F}, {F}, {M}, {F}. {G} ] 

               Quiero filtrar G => myFavorite.filter [{G}]
               quiero a todos => myFavorites = [ {F}, {F}, {M}, {F}. {G} ] 

cuando agregue = 'allCharacters' => pisar 'myFavorites'
Elimina un favorito = DESDE 'allCharacters' => pisar 'myFavorites'


*/