import { useState } from 'react';
import './App.css';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  const handleClick = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="app">
      <h1>CIVA Reduction</h1>
      <div className="card">
        <button onClick={handleClick}>Count: {count}</button>
        <p>This is a template for engineering-focused development.</p>
      </div>
    </div>
  );
}

export default App;
