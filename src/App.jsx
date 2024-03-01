import React, { useState } from 'react';
import './App.css';

function App() {
  const number = 3;

  const [boxStates, setBoxStates] = useState(Array(number * number));

  const handleClick = (index) => {
    const newBoxStates = [...boxStates];
    newBoxStates[index] = !newBoxStates[index];

    let row = Math.floor(index / number);
    let col = index % number;

    for (let [increment_x, increment_y] of [
      [0, 1],
      [1, 0],
      [-1, 0],
      [0, -1],
    ]) {
      const newRow = row + increment_x;
      const newCol = col + increment_y;
      if (number > newRow && newRow >= 0 && number > newCol && newCol >= 0) {
        const neighborIndex = newRow * number + newCol;
        newBoxStates[neighborIndex] = !newBoxStates[neighborIndex];
      }
    }

    setBoxStates(newBoxStates);
  };

  return (
    <div className="container">
      <div className={`box ${boxStates[0] ? 'selected' : ''}`} onClick={() => handleClick(0)}></div>
      <div className={`box ${boxStates[1] ? 'selected' : ''}`} onClick={() => handleClick(1)}></div>
      <div className={`box ${boxStates[2] ? 'selected' : ''}`} onClick={() => handleClick(2)}></div>
      <div className={`box ${boxStates[3] ? 'selected' : ''}`} onClick={() => handleClick(3)}></div>
      <div className={`box ${boxStates[4] ? 'selected' : ''}`} onClick={() => handleClick(4)}></div>
      <div className={`box ${boxStates[5] ? 'selected' : ''}`} onClick={() => handleClick(5)}></div>
      <div className={`box ${boxStates[6] ? 'selected' : ''}`} onClick={() => handleClick(6)}></div>
      <div className={`box ${boxStates[7] ? 'selected' : ''}`} onClick={() => handleClick(7)}></div>
      <div className={`box ${boxStates[8] ? 'selected' : ''}`} onClick={() => handleClick(8)}></div>
    </div>
  );
}

export default App;
