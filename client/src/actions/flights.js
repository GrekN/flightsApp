import axios from 'axios'

export const RECEIVE_FLIGHTS = 'RECEIVE_FLIGHTS'

export function receiveFlights(data) {
  return {
    type: RECEIVE_FLIGHTS,
    data
  }
}

export function fetchFlights() {
  return dispatch => {
    return axios.get(`http://localhost:3000/flights`)
      .then(response => response.data)
      .then(data => dispatch(receiveFlights(data.flights)))
  }
}
