import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>A számláló állása: {count}</button>
    </div>
  );
}

export default Counter;
