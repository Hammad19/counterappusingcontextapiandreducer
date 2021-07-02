import React from 'react';
import CounterReducer from './counterReducer.js'

const Child2 =()=>{
    let [state,dispatch] = React.useReducer(CounterReducer,1)
    return (
    <div className = "App">
        <h1 className = "App-header">COUNTER USING REDUCER</h1>
        <h2>Reducer Counter Value is :{state} </h2>
        <button className = 'btn' onClick = {()=>{dispatch('INCREMENT')}} >Increment Reducer</button>
        <button className = 'btn' onClick = {()=>{dispatch('DECREMENT')}} >Decrement Reducer</button>
        <button className = 'btn' onClick = {()=>{dispatch('RESET')}} >Reset Reducer</button>
    </div>
    )
}

export default Child2;