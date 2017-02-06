
export const getTownLocations = (postcode) => {
  return dispatch => {
    dispatch(loading());
    request
      .get(`${API_URL}/townList/${postcode}`)
      .end((err, res) => {
          const e = res.error || err;
          if(e) {
            dispatch(error(e));
          } else {
            browserHistory.push(`/a/${postcode}`);
            dispatch(getResponse(postcode, res.body));
          }
      })
  }
};

function getResponse(postcode, body) {
  return {
    type: "UPDATE_NEAREST_TOWNS",
    postcode,
    body
  }
}
