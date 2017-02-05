
import { assoc } from "ramda";

function Towns(state = {}, action) {

  switch (action.type) {
    case "UPDATE_NEAREST_TOWNS":
      return assoc("postcode", action.postcode, action.body);
    
    default:
      return state
  }
}

export default Towns;
