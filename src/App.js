import React, {useState} from 'react';
import logo from './Images/logo.svg';

function App() {
  const fizzBuzzArr = [];
  const fizzBuzz = () => {
    let value = 1;
    while (value < 100) {
      if(value % 3 === 0 && value % 5 === 0) {
        fizzBuzzArr.push('FizzBuzz');
      }
      else if(value % 3 === 0) {
        fizzBuzzArr.push('Fizz');
      }
      else if(value % 5 === 0) {
        fizzBuzzArr.push('Buzz');
      }
      else {
        fizzBuzzArr.push(value);
      }
      value++;
    }
    return fizzBuzzArr
  }
  const fizzBuzzLog = () => {
    for (let i=1; i <= 100; i++)i % 15 == 0 ? console.log("FizzBuzz") :i % 3 == 0 ? console.log("Fizz") : i % 5 == 0 ? console.log("Buzz") : console.log(i);
  }
  return (
    <div className="App">
      <img src={logo} />
      <button onClick={()=>fizzBuzzLog()}>Click me for console log</button>
      {fizzBuzz().map(i=> i==="Fizz" ? <p key={Math.random()}>I am divisable with 3 so... {i}</p> : i==="Buzz" ? <p key={Math.random()}>I am divisable with 5 so... {i}</p> : i==="FizzBuzz" ? <p key={Math.random()}>I am divisable with 3 and 5 so... {i}</p> : <p key={Math.random()}>I don't have superpowers so... {i}</p>)}

    </div>
  );  
}

export default App;
