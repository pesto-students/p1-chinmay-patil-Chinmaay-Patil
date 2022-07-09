import React from "react";
import { increaseStep, resetStep } from "./redux/action-creator";
import { useSelector, useDispatch } from "react-redux";
import './App.css'

function App() {
  const myState = useSelector(state => state.ourState.count)
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="App1">
        <h3> You've Walked {myState} Steps Today !</h3>
        <div className="buttons">
          <button onClick={() => dispatch(increaseStep())}> Add a Step</button>

          <button onClick={() => dispatch(resetStep())}> RESET Steps</button>
        </div>
      </div>
    </div>
  );
}

export default App;
