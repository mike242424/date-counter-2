import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date('january 30 2024');
  date.setDate(date.getDate() + count);

  function handleStepMinusClick() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  function handleStepPlusClick() {
    setStep((prevStep) => prevStep + 1);
  }

  function handleCountMinusButton() {
    setCount((prevCount) => prevCount - step);
  }

  function handleCountPlusButton() {
    setCount((prevCount) => prevCount + step);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <button onClick={handleStepMinusClick}>-</button>
        Step: {step}
        <button onClick={handleStepPlusClick}>+</button>
      </div>
      <div>
        <button onClick={handleCountMinusButton}>-</button>
        Count: {count}
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
    </div>
  );
}

export default App;
