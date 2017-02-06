import React from 'react'
import { Link } from 'react-router';

class ComponentB extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.stateB}</p>
        <p><Link to="/a">Link to A</Link></p>
      </div>
    )
  }

}

export default ComponentB
