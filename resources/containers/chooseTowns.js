import { connect } from 'react-redux';
import chooseFromTownsList from "../components/chooseFromTownsList.jsx";
import { getFeeds } from "../actions/getFeeds";
import { getTownLocations } from "../actions/getTowns";

const mapStateToProps = (state) => {
  return {
    towns: state.towns
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFeedRequest: (postcode, towns) => dispatch(getFeeds(postcode, towns)),
    getTownsRequest: (postcode) => dispatch(getTownLocations(postcode))
  }
};

const ChooseTownsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(chooseFromTownsList);

export default ChooseTownsContainer;
