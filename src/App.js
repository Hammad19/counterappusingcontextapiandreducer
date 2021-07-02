import logo from './logo.svg';
import React from 'react';
import './App.css';
import Parent from './parent.js'
import counterContext from './countercontext';

function App() {
  let countState = React.useState(1);
  return (
    <counterContext.Provider value = {countState}>
      <div>
        <Parent/>
      </div>
   </counterContext.Provider>
  );
}

export default App;
