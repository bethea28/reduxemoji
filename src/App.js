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

var textChange = (name)=>{
  console.log(name)
  return{type:'textChange', data:name}

}

var defaultState = {
     counter :0,
     emoji : [],
     text :'',

}



const reducer = (state = defaultState,action) =>{
  switch(action.type){
    case'increment':
      return  {counter: state.counter + 1, emoji: state.emoji.concat(action.data)}
    case'decrement':
      return {counter: state.counter - 1, emoji: state.emoji.slice(1)}
    case 'textChange':
      return Object.assign({},state, {text: action.data})
    default:
      return state;
  }
}


const store = createStore(reducer)

var Action = React.createClass({
  
  handleChange(event){
    var text = event.target.value
    store.dispatch(textChange(text))
  },

  render(){
    return (
      <div>
          <input type = 'text' name='text' onChange = {this.handleChange}/>
          <button onClick={store.dispatch.bind(this,increment())}> + </button>
          <button onClick={store.dispatch.bind(this,decrement())}> - </button>
          <h1>{store.getState().counter}</h1>
          <Emoji/>
          
    
      </div>
    )
  }
})


var Emoji = React.createClass({
  render(){
    return(
      <div>
        <h1>{store.getState().emoji.map(value => value)}</h1>
      </div>

      )
  }
})



const render = () =>{
  ReactDOM.render(

  <Action/>,
  document.getElementById('root') 
    )

}

render()
store.subscribe(render)