import React, { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('0');
  // const [result, setResult] = useState('');

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

  const handelSignClick = e => {
    if (e.target.closest('.operators') !== e.target)
      setInput(`${input} ${e.target.textContent} `);
  };

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="buttons">
        <div
          className="operators"
          onClick={handelSignClick}
          onKeyDown={() => {}}
          role="none"
        >
          <div>+</div>
          <div>-</div>
          <div>*</div>
          <div>/</div>
        </div>

        <div
          className="leftPanel"
          onClick={handleNumberClick}
          onKeyDown={() => {}}
          role="none"
        >
          <div className="numbers">
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
          <div className="numbers">
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </div>
          <div className="numbers">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className="numbers">
            <div>0</div>
            <div>.</div>
            <div>AC</div>
          </div>
        </div>
        <div className="equal">=</div>
      </div>
    </div>
  );
};

export default App;
// eslint-disable-next-line
// notoriety
