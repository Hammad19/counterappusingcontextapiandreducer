import logo from './logo.svg';
import './App.css';
import Parent from './parent.js'
import counterContext from './countercontext';

function App() {
  return (
    <counterContext.Provider value = {25}>
      <div>
        <Parent/>
      </div>
   </counterContext.Provider>
  );
}

export default App;
