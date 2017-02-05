import { connect } from 'react-redux';
import home from "../components/home.jsx";
import { getTownLocations } from "../actions/getTowns";
import { isNil } from "ramda";

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTownsRequest: (postcode) => dispatch(getTownLocations(postcode))
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(home);

export default HomeContainer
