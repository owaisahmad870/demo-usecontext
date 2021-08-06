const numberReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.val
      case 'DECREMENT':
        return state - action.val
    }
}
export default numberReducer;


//useReducer is apure function and it does not update or change external API, variable or state
//Every time you run the reducer it creates a new object instead of updating the existing one
//