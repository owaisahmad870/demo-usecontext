import React, { useContext } from "react";
import Parent from "./Parent";
import ValueContext from './ValueContext';

function App() {
  //let [number, setNumber] = useState(45);
  let value = 81;
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


