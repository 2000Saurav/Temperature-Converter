import React from 'react';

function FahrenheitInput({ value, onTempratureChange }) {
  return (
    <>
      <label>
        Fahrenheit
        <input
          type="text"
          value={value}
          onChange={(e) => onTempratureChange(Number(e.target.value))}
        />
      </label>
    </>
  );
}

export default FahrenheitInput;
