import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Buttons from './buttons';

const Calculator = () => {
  const [input, setInput] = useState('0');

  const handleNumberClick = e => {
    if (e.target.closest('.numbers') !== e.target)
      setInput(prevInput => {
        if (prevInput === '0') {
          return e.target.textContent
            .replaceAll(/\^0/g, '')
            .replaceAll(/^\./g, '0.');
        }
        return (prevInput + e.target.textContent)
          .replaceAll(/\^0/g, '')
          .replaceAll(/^\./g, '0.');
      });
    if (e.target.textContent === 'AC') setInput('0');
  };

  const handleSignClick = e => {
    if (e.target.closest('.operators') !== e.target)
      setInput(`${input} ${e.target.textContent} `);
  };

  const handleEqualClick = () => {
    try {
      setInput(evaluate(input).toFixed(2));
    } catch (error) {
      setInput('Error!!!');
      console.log(error);
    }
  };

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <Buttons
        handleSignClick={handleSignClick}
        handleNumberClick={handleNumberClick}
        handleEqualClick={handleEqualClick}
      />
    </div>
  );
};

export default Calculator;
