import React from 'react'

class DateComponent extends React.Component {
  createDateFromTimestamp(timestamp) {
    if (!timestamp) {
      return;
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date(timestamp);

    const dateStr = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getUTCFullYear()}`;
    const timeStr = (date.getHours() && date.getMinutes()) ? `${date.getHours()}:${date.getMinutes()}` : ``;

    return (
      `${dateStr} ${timeStr}`
    )
  }

  render() {
    return (
      <span>
        {this.createDateFromTimestamp(this.props.timestamp)}
      </span>
    )
  }
}

export default DateComponent
