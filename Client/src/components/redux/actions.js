import axios from "axios";
import { FILTER, ORDER } from "./types";
const ENDPOINT = "http://localhost:3001/rickandmorty/fav";

//export function addFav( character ) {
//    return {
//        type: ADD_FAV,
//        payload: character
//    }
//};

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(ENDPOINT, character);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
  //const endpoint = "http://localhost:3001/rickandmorty/fav";
  //return (dispatch) => {
  //  axios.post(ENDPOINT, character).then(({ data }) => {
  //    return dispatch({
  //      type: "ADD_FAV",
  //      payload: data,
  //    });
  //  });
  //};
};

//export function removeFav( id ) {
//    return {
//        type: REMOVE_FAV,
//        payload: id
//    }
//}

// ACTION | removeFav
export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${ENDPOINT}/${id}`);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch(error) {
      return dispatch({
        type: "ERROR",
        payload: error.message
      });
    }
  };

  //const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  //return (dispatch) => {
  //  axios.delete(endpoint).then(({ data }) => {
  //    return dispatch({
  //      type: "REMOVE_FAV",
  //      payload: data,
  //    });
  //  });
  //};
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

//{type: 'ORDER', pauload: 'A' || 'D'}
