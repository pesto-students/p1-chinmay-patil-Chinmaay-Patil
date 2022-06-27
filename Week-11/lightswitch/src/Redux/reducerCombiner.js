import Toggle from "./Action";

import { combineReducers } from "redux";

const combiner = combineReducers({
  flip: Toggle
});

export default combiner;
