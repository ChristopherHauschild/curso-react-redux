import {
  NUM_MIN_CHANGED,
  NUM_MAX_CHANGED
} from './actionTypes'

// Action Creator
export function changeNumberMin(newNumber) {
  return {
    type: NUM_MIN_CHANGED,
    payload: newNumber
  }
}

// Action Creator
export function changeNumberMax(newNumber) {
  return {
    type: NUM_MAX_CHANGED,
    payload: newNumber
  }
}