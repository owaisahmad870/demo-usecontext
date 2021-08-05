import React from 'react';

const ValueContext = React.createContext(45);


export default ValueContext;


//Context has two things Provider and Consumer 
//Provider provides a value to component tree
//Consumer consumes the value
//Create  ValueContext.Provider in the App.js as a
//wrapper in the root element