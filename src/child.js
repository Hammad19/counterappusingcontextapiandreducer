import React from 'react';
import counterContext from './countercontext';

const Child = () => {
    let counterValue = React.useContext(counterContext);
    return(
        <div className = 'App'>
            <h1 className = "App-header">COUNTER USING CONTEXT API</h1>
            <h2>Counter Value is: {counterValue[0]}</h2>
            <button className = 'btn' onClick ={()=> {counterValue[1](++counterValue[0])}}>Increament</button>
            <button className = 'btn' onClick ={()=> {counterValue[1](counterValue[0]=0)}}>Reset Counter</button>
            <button className = 'btn' onClick ={()=> {counterValue[1](--counterValue[0])}}>Decreament</button>
           

        </div>)
}

export default Child