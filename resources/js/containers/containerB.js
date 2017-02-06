import { connect } from 'react-redux';
import ComponentB from "../components/componentB.jsx"

const mapStateToProps = state => {
  return {
    "stateB": state.stateB
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const ContainerB = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentB);

export default ContainerB
