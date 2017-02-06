import { connect } from 'react-redux';
import ComponentA from "../components/componentA.jsx"
import { asyncAction, syncAction } from "../actions/example";

const mapStateToProps = state => {
  return {
    "stateA": state.stateA
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAsyncAction: data => dispatch(asyncAction(data)),
    dispatchSyncAction: data => dispatch(syncAction(data))
  }
};

const ContainerA = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentA);

export default ContainerA
