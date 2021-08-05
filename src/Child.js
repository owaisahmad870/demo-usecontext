import React from 'react';

function Child(props) {
  return (
    <div >
      Child number {props.num}
    </div>
  );
}

export default Child;

//The variable given in the app component in travelled through the Parent and now to the child with props
