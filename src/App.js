import React, { useContext } from "react";
import Parent from "./Parent";
import ValueContext from './ValueContext';
import { useState } from 'react';
function App() {
  //let [number, setNumber] = useState(45);
  let value = useState(48);
  return (
    <ValueContext.Provider value={value}>
      <div>
        Hello World
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;

//useState is our context consumer in case of using functional
