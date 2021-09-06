import React from 'react';
import { Provider} from "react-redux";
import store from "./store"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Card from './components/cardComp';

function App() {
  return (
    <div className="App">
      <Card/>
    </div>
  );
}

export default App;
