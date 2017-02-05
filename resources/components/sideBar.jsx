import React from 'react'
import { browserHistory } from 'react-router'
import SideBarItem from './sideBarItem.jsx'

class Sidebar extends React.Component {
  createPlacenameList(placeName) {
    if(typeof placeName === 'string') {
      return placeName;
    }
    return placeName.join(', ');
  }

  createPostcode(postcode) {
    postcode = postcode.toUpperCase();
    return `${postcode.substr(0, postcode.length-3)} ${postcode.substr(postcode.length-3, postcode.length-1)}`
  }

  createSideBarItem(items) {
    items.map((item, i) => <SideBarItem item={item} key={i}/>)
  }

  render() {
    return (
      <section className="sidebar">

        <div className="your-postcode">
          <span className="postcode">{this.createPostcode(this.props.data.postcode)}</span>
          <span className="postcode-locations">{this.createPlacenameList(this.props.data.placeName)}</span>
          <a onClick={() => browserHistory.push(`/a/${this.props.data.postcode}`)}>(edit)</a>
        </div>


        <div className="area-stats">
          <h3>Local Stats</h3>

          <div className="st-accordion">
            <ul>
              {this.props.data.sideBarItems}
            </ul>
          </div>
        </div>
      </section>
    )
  }

}

export default Sidebar
