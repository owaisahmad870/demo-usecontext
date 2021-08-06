import React, { useContext, useReducer } from "react";
import numberReducer from './NumberReducer';

function Child2() {
    let [state, dispatch] = useReducer(numberReducer,52);
    return(
        <div>
            Child 2 {state}
            <button onClick={()=> { dispatch({type:"INCREMENT", val: 67});  }}>Increment</button>
            <button onClick={()=> { dispatch({type:"DECREMENT", val: 34});  }}>Decrement</button>
        </div>
    );
}

export default Child2;


//With useReducer you can do multiple type of chnages to particular state i.e increase or decrease 
//Or you need multiple type of actions for a particular state, on the contrast useState just  updates the value from the function 

