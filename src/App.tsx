import React from 'react';
import logo from './logo.svg';
import './App.css';

const name: string = "hello";
let name2: string = "good";
name2 = "good by";

const number2:number = 2;

let array2 = [0, 2, "hello2"]

interface NAME {
  first: string;
  last?: string | null;
}

const name4: NAME = {
  first: "yamada",
  last: null
}
  
const abc = (x:number, y:number): number => {
  return x + y;
}

const ans = abc(1, 2)

function App() {
  return (
    <div className="App">
      {//<div>header className="App-header"></header>
      }
      <p>{ ans }</p>
    </div>
  );
}

export default App;
