import React from 'react';

function Child() {
    let value = useContext(ValueContext);
    let updateValue = value[1];
  return (
    <div >
      Child number {value}
      <button onClick={() =>{ updateValue(++value[0]) }}>Update Value</button>
    </div>
  );
}

export default Child;

//The variable given in the app component in travelled through the Parent and now to the child with props
