import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
var classNames = require('classnames');

var increment = ()=>{
  return {type:'increment', data: <i className="em em---1"></i>}
}

var decrement = () =>{
  return {type:'decrement' ,data: <i className="em em---1"></i>}

}

