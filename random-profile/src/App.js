// importing file (for styling)
import './App.css';
// Importing the values/functions from react (in node modules)
import { useState } from 'react';

// The only thing we're exporting from this file (A function in this case)
// You can import this from other files and access the value of it
// in this case the App function as imported in index.js
export default function App() {
  const [count, setCount] = useState(); // value of useState() is [variable, function]
  // useState is only used when declaring the variable
  // use the variable to access the value use the function to change the value
  // without useState the website won't refresh and the updated values won't appear
  // example of useState on line 19

  // handleClick called at line 31 when user clicks button
  function handleClick() {
    // function to change the value of count (function already defined at line 10)
    setCount((prevCount) => {
      // prevCount is the previous value of count
      // what you return in the function will be the new value of count
      return prevCount + 1;
    });
  }

  // the code that's like HTML below is called JSX and react compiles it to dom looking data
  // you can use {} to write javascript in the JSX
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClick}>increase count</button>
    </div>
  );
}
