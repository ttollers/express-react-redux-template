import React from 'react'

class CrimeStatsItem extends React.Component {
  createReportPublishDate(timestamp) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(timestamp);
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  createTotalChangeDirection(changePercentage) {
    if(changePercentage > 100) {
      return "up";
    } else {
      return "down";
    }
  }

  createPercentageChange(percentage) {
    return (percentage > 100) ?  percentage % 100 : 100 - percentage;
  }

  createPolicePriorities(priorities) {
    if(priorities.length === 0) {
      return;
    }

    return (
      <li>Local policing priorities for this area are:
        <ul>
          {priorities.map((priority, index) => <li key={index} dangerouslySetInnerHTML={{__html: priority}}/>)}
        </ul>
      </li>
    )
  }

  render() {

    const { data, updated } = this.props.item;

    return (
      <div className="post-content">
        <div className="enhanced-number">
          <div className="enhanced-number-inner">
            <span className="enhanced-number-header">{this.createReportPublishDate(updated)}</span>
            <h2>{data.totalCrime}</h2>
            <span className="enhanced-number-footer">Crimes were reported in your area</span>
          </div>
        </div>
        <ul>
          <li>Crime is <b>{this.createTotalChangeDirection(data.totalCrimeChange)} {this.createPercentageChange(data.totalCrimeChange)}%</b> compared to this time last year.</li>
          {this.createPolicePriorities(data.priorityData)}

          <a className="btn" href={`https://www.police.uk/${data.force}/${data.neighbourhood}/`}>More Info</a>
        </ul>
      </div>
    )
  }
}

export default CrimeStatsItem
