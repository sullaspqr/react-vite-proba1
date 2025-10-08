import { useState } from 'react';
import './App.css'
import Hello from './Hello';
import Hellop from './Hellop';
function App() {
 const [count, setCount] = useState(0);

  return (
    <div>
      <Hello name="Barba" age={count} />
      <Hellop name="Borba" age={count} />
        <button onClick={() => setCount(count + 1)}
          className="btn btn-primary"
          >
          A számláló értéke:  {count}</button>
    </div>
  )
}

export default App
