import { rootReducer } from "./combineReducer";
import { createStore } from "redux";


export const store = createStore(rootReducer)