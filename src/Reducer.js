import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
var classNames = require('classnames');



const reducer = (state = {counter:0, emoji:[]},action) =>{
  switch(action.type){
    case'increment':
      return  {counter: state.counter + 1, emoji: state.emoji.concat(action.data)}
    case'decrement':
      return {counter: state.counter - 1, emoji: state.emoji.slice(1)}
    default:
      return state;
  }
}

