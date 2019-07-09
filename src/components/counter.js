// react
import React from 'react';
// connect
import { connect } from 'react-redux';
// action creator with param
import {updateCounter} from '../actions/counterActions'

// click +1
// click -1
const counterStep = 1

const CounterComponent = (props) => {
  // pass props into it
  // because higher order, but not class
  return(
    <div>
        <h2>{props.counter}</h2>
        <button type='button' onClick={props.decrement}>-</button>
        <button type='button' onClick={props.increment}>+</button>
    </div>
  )
}

// global counter
const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer
  }
}

// fire action creator, change UI
// inside call
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(updateCounter(counterStep))
    },
      
    decrement: () => {
      dispatch(updateCounter(-counterStep))
    }
  }
}

// connect
export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent)
    
