import { assoc } from "ramda";

function Feed(state = {}, action) {
  switch (action.type) {

    case "LOADING":
      return Object.assign({}, state, {
        isFetching: true
      });

    case "UPDATE_FEED":
      return Object.assign({}, state, {
        isFetching: false,
        body: action.body
      });

    default:
      return state
  }
}

export default Feed;
