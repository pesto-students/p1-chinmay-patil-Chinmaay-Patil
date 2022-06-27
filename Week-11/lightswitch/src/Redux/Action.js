const initialState = true;

function Toggle (currentState = initialState, action){
  switch (action.type) {
    case "FLIP":
      return !currentState;
    default:
      return currentState;
  }
};

export default Toggle;
