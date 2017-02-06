
import { combineReducers } from 'redux'
import stateA from "./reducerA"
import stateB from "./reducerB"

const RootReducer = combineReducers({
  stateA,
  stateB
});

export default RootReducer
