"use client";

import { useState } from 'react';
import getPrimeFactors from 'utils/getPrimeFactors';

export default function Counter() {
  const [numberInput, setNumberInput] = useState<string>('');

  const [outputNumbers, setOutputNumbers] = useState<number[]>([]);

  const handleNumberChange = (event) => {
    if (event == null) return;

    // Check if the input is a number
    const re = /^[0-9\b]+$/;
    if (event?.target.value === '' || re.test(event.target.value)) {
      setNumberInput(event?.target.value);
    }
  };

  const onSubmit = () => {
    // Check if prime use the function thats already built in the utils
    // console.log("Run prime function")

    const userNumberInput = Number(numberInput);

    const output = getPrimeFactors(userNumberInput);

    setOutputNumbers(Array.from(output));
  };

  return (
    <div className="">
      <input
        type="text"
        placeholder="Your fav number"
        value={numberInput}
        onChange={handleNumberChange}
      />
      <button className="bg-red-300 p-2" onClick={onSubmit}>
        Submit{' '}
      </button>
      {outputNumbers.length <= 1 ? (
        'Hey this is a prime number'
      ) : (
        <div>
          This is not a prime number and the factors are:{' '}
          {JSON.stringify(outputNumbers)}{' '}
        </div>
      )}
    </div>
  );
}
