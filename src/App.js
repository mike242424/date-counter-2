import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date('january 30 2024');
  date.setDate(date.getDate() + count);

  function handleCountMinusButton() {
    setCount((prevCount) => prevCount - step);
  }

  function handleCountPlusButton() {
    setCount((prevCount) => prevCount + step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>
      <div>
        <button onClick={handleCountMinusButton}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountPlusButton}>+</button>
      </div>
      <div>
        <span>
          {count === 0
            ? 'Today is '
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : `${count} days from today is `}
        </span>

        <span>{date.toDateString()}</span>
      </div>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
