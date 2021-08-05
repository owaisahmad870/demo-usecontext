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

//In Value context file we have given the value 45 but here we have a provider giving the value 81
//Because this wrapper is at the top level of hierarchy right after the root so all the comp inside this will acces this value including the parent
//Despite of that in the parent comp we are not calling this value
