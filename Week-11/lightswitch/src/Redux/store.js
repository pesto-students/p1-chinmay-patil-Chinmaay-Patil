import { createStore } from "redux";
import combiner from "./reducerCombiner";

const store = createStore(combiner);

export default store;
