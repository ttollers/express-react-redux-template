
import { combineReducers } from 'redux'
import feed from './feed'
import towns from './towns'

const RootReducer = combineReducers({
  towns,
  feed
});

export default RootReducer
