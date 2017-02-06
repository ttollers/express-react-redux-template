
function ReducerA(state = {}, action) {

  switch (action.type) {

    case "ASYNC_ON_REQUEST":
      return "Loading...";
    case "ASYNC_ON_RESPONSE":
      return action.data;
    case "SYNC_ACTION":
      return action.data;
    default:
      return state
  }
}

export default ReducerA;
