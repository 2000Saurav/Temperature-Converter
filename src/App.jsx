import { useState } from 'react';
import FahrenheitInput from './Components/FahrenheitInput';
import CelciusInput from './Components/CelciusInput';

import './App.css';
function App() {
  const [temperature, setTemperature] = useState({ value: 0, scale: 'c' });
  // intial state variable named temperature, temperature is an object with value which store only numeric temperature value and scale tracks whether the input is celcius or fahrenheit. setTemperature is function that updates the temperature state when user change
  const handleTemperatureChange = (value, scale) => {
    setTemperature({ value, scale });
  };

  const convertToCelcius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const convertToFahrenheit = (celcius) => (celcius * 9) / 5 + 32;

  const celcius =
    temperature.scale === 'f'
      ? convertToCelcius(temperature.value)
      : temperature.value;

  const fahrenheit =
    temperature.scale === 'c'
      ? convertToFahrenheit(temperature.value)
      : temperature.value;

  return (
    <>
      <h1>Temperature Converter</h1>
      <CelciusInput
        value={celcius}
        onTempratureChange={(value) => handleTemperatureChange(value, 'c')}
      />
      <FahrenheitInput
        value={fahrenheit}
        onTemratureChange={(value) => handleTemperatureChange(value, 'f')}
      />
    </>
  );
}

export default App;
