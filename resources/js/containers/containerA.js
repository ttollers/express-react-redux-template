import { connect } from 'react-redux';
import ComponentA from "../components/componentA.jsx"

const mapStateToProps = state => {
  return {
    "stateA": state.stateA
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const ContainerA = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentA);

export default ContainerA
