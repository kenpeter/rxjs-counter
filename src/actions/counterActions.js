/*
 * action types
 */

// up counter
export const UPDATE_COUNTER = 'UPDATE_COUNTER'
// up counter done
export const UPDATE_COMPLETE = 'UPDATE_COMPLETE'

// action creator(counter_step)
// return type + payload
export function updateCounter(counterStep) {
  return { type: UPDATE_COUNTER, payload: counterStep }
}