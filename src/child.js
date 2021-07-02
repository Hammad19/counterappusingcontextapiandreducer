import React from 'react';
import counterContext from './countercontext';

const Child = () => {
    let counterValue = React.useContext(counterContext);
    return(
        <div className = 'App'>
            <h1>Counter Value is: {counterValue[0]}</h1>
            <button onClick ={()=> {counterValue[1](++counterValue[0])}}>Increament</button>
            

        </div>)
}

export default Child