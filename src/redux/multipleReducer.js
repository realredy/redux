import { combineReducers } from "redux";
/**
 * ! combinereducers para combinar varios reducers en un objeto ilimitado
 */
import TextCountReducer from "./textCounter/textCounterReducer";
import countReducer from "./counter/countReducer";
import asyncReducer from "./asyncResources/asyncReducers";
import { gamereducer } from "../redux/game/reducerGame";

const bootStore = combineReducers({
  counter: countReducer,
  text: TextCountReducer,
  async: asyncReducer,
  game: gamereducer,
});

export default bootStore;
