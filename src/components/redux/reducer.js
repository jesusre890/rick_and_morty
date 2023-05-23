import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: []
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
                myFavorites: [...state.myFavorites, payload]
            }
        case REMOVE_FAV:
            const filteredFavs = state.myFavorites.filter(
                fav => fav.id !== Number(payload)
            )
            return {
                ...state,
                myFavorites: filteredFavs
            }
        default:
            return { ...state } // con ... devuelvo un nuevo objeto del estado
    }
}