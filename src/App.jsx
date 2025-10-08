import './App.css'
import Hello from './Hello';
import Hellop from './Hellop';
import Counter from './Counter';
function App() {

  return (
    <div>
      <Hello name="Barba" age={15} />
      <Hellop name="Borba" age={18} />
        <Counter />
    </div>
  )
}

export default App
