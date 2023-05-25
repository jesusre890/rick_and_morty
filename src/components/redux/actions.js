import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./types";

export function addFav( character ) {
    return {
        type: ADD_FAV,
        payload: character
    }
};

export function removeFav( id ) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export function filterCards( gender ) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards( order ) {
    return {
        type: ORDER,
        payload: order,
    }
}

//{type: 'ORDER', pauload: 'A' || 'D'}
