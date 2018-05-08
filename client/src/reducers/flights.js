import {RECEIVE_FLIGHTS} from '../actions'

const initialState = []

export default function flights(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_FLIGHTS:
      return action.data
    default:
      return state
  }
}
