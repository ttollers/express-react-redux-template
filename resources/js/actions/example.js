
export const asyncAction = data => {
  
  return dispatch => {
    dispatch({
      type: "ASYNC_ON_REQUEST"
    });

    setTimeout(() => {
      dispatch({
        type: "ASYNC_ON_RESPONSE",
        data
      })
    }, 1500);

  }
};

export function syncAction(data) {
  return {
    type: "SYNC_ACTION",
    data
  }
}
