import React from 'react'
import DateComponent from '../helpers/dateComponent.jsx'

class FixMyStreetItem extends React.Component {

  createDescription(description) {
    return (<p dangerouslySetInnerHTML={{__html: description}}></p>);
  }

  createImage(logo) {
    return logo ? (
      <figure>
        <img src={logo} />
      </figure>
    ) : "";
  }

  createStatus(status) {
    return (status === "closed") ? `[FIXED] ` : ``;

  }

  render() {

    const { address, link, logo, title, description, updated, status } = this.props.item;

    return (
      <div className="post-content">
        <h2><a href={link} title="" target="_blank">{this.createStatus(status)}{title}</a></h2>
        <p><b>Address: </b>{address}</p>
        {this.createDescription(description)}
        {this.createImage(logo)}
        <a className="btn" href={link} target="_blank">More Info</a>
      </div>
    )
  }
}

export default FixMyStreetItem
