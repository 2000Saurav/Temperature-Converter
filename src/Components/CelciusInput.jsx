import React from 'react';

function CelciusInput({ value, onTempratureChange }) {
  return (
    <>
      <label>
        Celcius
        <input
          type="text"
          value={value}
          onChange={(e) => onTempratureChange(Number(e.target.value))}
        />
      </label>
    </>
  );
}

export default CelciusInput;
