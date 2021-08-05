import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
    let value = useContext(ValueContext);
  return (
    <div >
      Child number {value}
    </div>
  );
}

export default Child;
//We've created a way using a context to initialize the value in our main App comp 
//and pass the value to the remaining components in the application without explicitly passing the value the property parameeter
