
import request from "superagent";
import { loading, error } from "./utils";
import { API_URL } from "../constants"
import { browserHistory } from 'react-router'

export const getFeeds = (postcode, placeNames) => {
  return dispatch => {
    dispatch(loading());

    const queryStringParams = placeNames.map(x => `placeName=${x.name}`).join("&");

    request
      .get(`${API_URL}/listing/${postcode}?${queryStringParams}`)
      .end((err, res) => {
        const e = res.error || err;
        if(e) {
          dispatch(error(e));
        } else {
          browserHistory.push(`/feed/${postcode}?${queryStringParams}`);
          dispatch(getResponse(res.body));
        }
      })
  }
};

function getResponse(body) {
  return {
    type: "UPDATE_FEED",
    body
  }
}
