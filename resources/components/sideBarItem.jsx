import React from 'react'
import { browserHistory } from 'react-router'
import AutoDetectingItem from "./items/autoDetectingItem.jsx";

class SidebarItem extends React.Component {
  myClickHandler(e) {
    e.target.parentNode.classList.toggle('st-open');
  }

  render() {
    const { displayName, techName, type } = this.props.item;

    if(type === "food") {
      this.props.item.data = this.props.item.data.slice(0,3)
    }
    return (
      <li className={techName}>
        <a onClick={this.myClickHandler}>{displayName}<span className="st-arrow"></span></a>
        <div className={`st-accordion-content-wrapper ${type}`}>
          <AutoDetectingItem item={this.props.item} />
        </div>
      </li>
    )
  }

}

export default SidebarItem
