import React from 'react';
import Child from './Child'

function Parent(props) {
  return (
    <div >
      Parent
      <Child num={props.num}></Child>
    </div>
  );
}

export default Parent;

//The 'num' we given to App components is here available to us in the properties attribute
//Point to ponder is we are not using the data in Parent in spite of being part of it and using the child componentfrom the origin of App component
