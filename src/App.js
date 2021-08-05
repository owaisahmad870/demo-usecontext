import React, { useState } from 'react';
import Parent from './Parent';

function App() {
  let [number, setNumber] = useState(45);
  return (
    <div >
      Hello World
      <Parent num={number}></Parent>
      <button onClick={()=>{ setNumber(++number) }} >Update Number</button>
    </div>
  );
}

export default App;

//we created a State using  the React Hook and stored the dafaukt value of 45 into a variable 'number'
//And we have past this number to Parent comopnent
