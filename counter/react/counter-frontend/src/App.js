import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  function incrementClicked() {
    setCount(prevState => {
      return ++prevState;
    });
  }

  function decrementClicked() {
    setCount(prevState => {
      return --prevState;
    });
  }

  return (<>
    <button onClick={incrementClicked}>+</button>
    {count}
    <button onClick={decrementClicked}>-</button>
  </>);
}

export default App;
