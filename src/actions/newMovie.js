import { API_BASE } from '../config/env';
import axios from 'axios';

export const NEW_MOVIE_PENDING  = 'FETCH_MOVIES_PENDING';
export const NEW_MOVIE_FULFILLED  = 'FETCH_MOVIES_FULFILLED';
export const NEW_MOVIE_REJECTED  = 'FETCH_MOVIES_REJECTED';

export function onNewMovie() {
  return dispatch => {
    dispatch({ 
      type: "FETCH_MOVIES",
      payload: axios.get(`${API_BASE}/movies`)
      .then(result => result.data.movies)
    })
  }
}