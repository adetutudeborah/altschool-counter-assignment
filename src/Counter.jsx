/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { ChevronUp, ChevronsUp, RotateCcw, Hash, ChevronsDown, ChevronDown } from 'react-feather';
import './Counter.css';

function Grid() {

  const [count, setCount] = useState(0);

  const increaseByOne = () => setCount(count + 1);
  const increaseByTen = () => setCount(count + 10);
  const resetCount = () => setCount(0);
  const setRandomCount = () => setCount(Math.floor(Math.random() * 100) + 1);
  const decreaseByTen = () => setCount(count - 10);
  const decreaseByOne = () => setCount(count - 1);

  useEffect(() => {
    document.title = `The latest count is: ${count}`;
  }, [count]);

  return (
    <div className="container">

      <div className="counter">

        <h1 className="currentvalue">Current Value:</h1>
        <p className="number">{count}</p>

        <div className="buttons">
          <button onClick={increaseByOne}><ChevronUp size={30} /></button>
          <button onClick={increaseByTen}><ChevronsUp size={30} /></button>
          <button onClick={resetCount}><RotateCcw size={30} /></button>
          <button onClick={setRandomCount}><Hash size={30} /></button>
          <button onClick={decreaseByTen}><ChevronsDown size={30} /></button>
          <button onClick={decreaseByOne}><ChevronDown size={30} /></button>
      </div>

      </div>

    </div>
  );
}

export default Grid;