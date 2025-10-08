import { useState } from 'react';
import './App.css';
import Hello from './Hello';
import Hellop from './Hellop';
function App() {
const [count, setCount] = useState(10);
const [count2, setCount2] = useState(20);
  return (
    <div>
      <Hello name="Péter" age={count} />
      <Hellop name="Zsuzsa" age={count2} />
    <div>Péter állapota: {count+1} &nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Növelés</button> &nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>Csökkentés</button> 
    </div><br />
    <div>Zsuzsa állapota: {count2} &nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={() => setCount2(count2 + 1)}>Növelés</button> &nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={() => setCount2(count2 - 1)}>Csökkentés</button> 
    </div>
    </div>
  )
}

export default App
