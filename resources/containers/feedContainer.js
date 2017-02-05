import { connect } from 'react-redux';
import FeedPage from "../components/feedPage.jsx";
import { getFeeds } from "../actions/getFeeds";
import { isNil } from "ramda";

const mapStateToProps = (state) => {
  return {
    isFetching: state.feed && state.feed.isFetching,
    isHidden:isNil(state.feed && state.feed.body),
    feed: state.feed && state.feed.body || {},
    towns: state.feed && state.feed.towns
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFeedRequest: (postcode, towns) => dispatch(getFeeds(postcode, towns))
  }
};

const ChooseTownsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPage);

export default ChooseTownsContainer;
