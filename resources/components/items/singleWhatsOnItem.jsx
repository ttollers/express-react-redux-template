import React from 'react'
import R from 'ramda'
import DateComponent from '../helpers/dateComponent.jsx'

class SingleWhatsOnItem extends React.Component {

  render() {

    const {  title, link, logo, venue, startTime, endTime } = this.props.item;

    return (
      <div className="post-content">
        <div className="whatson-event">
          <div className="whatson-event-details">
            <h2><a href="">{title}</a></h2>
            <span className="whatson-date"><DateComponent timestamp={startTime} /> - <DateComponent timestamp={endTime} /></span>
            <span className="whatson-location">{venue}</span>
            <a className="btn" href={link} target="_blank">More Info</a>
          </div>
          <div className="whatson-event-image">
            <a href={link} target="_blank"><img src={logo} alt=""/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleWhatsOnItem