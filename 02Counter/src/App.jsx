import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter=6;

  let [counter, setCounter] = useState(10); /// hook for propgation of variable  update in ui

  let addValue = () => {
    // console.log(counter);

    if (counter > 19) {
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    // console.log(counter)
    if (counter < 1) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React with DOM</h1>
      <h4>Counter :{counter}</h4>
      <button onClick={addValue}> Add Value : {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value : {counter}</button>
      <p>The value is {counter}</p>
    </>
  );
}

export default App;
