import React from 'react'
import R from 'ramda'
import DateComponent from '../helpers/dateComponent.jsx'

class MultiWhatsOnItem extends React.Component {

  createEvents(events) {
    return events.map((event, index) => (
      <div className="whatson-event-details" key={index}>
        <h2><a href={event.link} target="_blank">{event.title}</a></h2>
        <span className="whatson-date"><DateComponent timestamp={event.startTime} /></span>
        <a className="btn" href={event.link} target="_blank">More Info</a>
      </div>
    ));
  }

  render() {

    const {  title, data } = this.props.item;

    return (
      <div className="post-content">
        <h2>{title}</h2>


        <div className="whatson-event whatson-event-list">
          {this.createEvents(data)}
        </div>

        <div className="whatson-subject-interest">
          <h2>De-select types of events you are not interested in</h2>
          <p>Future event listings will be more relevant to you.</p>
          <ul>
            <li className="selected">Art / Exhibitions</li>
            <li className="selected">Film</li>
            <li className="selected">Family &amp; Kids</li>
            <li className="selected">Food &amp; Drink</li>
            <li className="selected">Music &amp; Nightlife</li>
            <li className="selected">Theatre</li>

            <li>Sport</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MultiWhatsOnItem