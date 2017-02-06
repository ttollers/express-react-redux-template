import React from 'react'
import { Link } from 'react-router';

class ComponentA extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleAsyncSubmit = this.handleAsyncSubmit.bind(this);
    this.handleSyncSubmit = this.handleSyncSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleAsyncSubmit(event) {
    this.props.dispatchAsyncAction(this.state.value);
    event.preventDefault();
  }

  handleSyncSubmit(event) {
    this.props.dispatchSyncAction(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>{this.props.stateA}</p>
        <p><Link to="/b">Link to B</Link></p>
        <input onChange={this.handleChange} value={this.state.value}/>
        <button onClick={this.handleAsyncSubmit}>Async Action</button>
        <button onClick={this.handleSyncSubmit}>Sync Action</button>
      </div>
    )
  }
}

export default ComponentA
