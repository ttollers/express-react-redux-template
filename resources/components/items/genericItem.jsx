import React from 'react'

class GenericItem extends React.Component {

  createDescription(type, description) {
    if(type === 'news' || type === 'whats-on') {
      if (description.length > 300) description = `${description.substring(0,200)}&hellip;`;
    }
    return (<p dangerouslySetInnerHTML={{__html: description}}></p>);
  }

  createImage(link, logo) {
    return logo ? (
      <a href={link} target="_blank"><img src={logo} alt=""/></a>
    ) : "";
  }

  createDate(timestamp) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date(timestamp);
    return (
      `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}`
    )
  }

  render() {

    const { logo, link, type, title, description } = this.props.item;

    return (
      <div className="post-content">
        <h2><a href={link} title="" target="_blank">{title}</a></h2>
        {this.createImage(link, logo)}
        {this.createDescription(type, description)}
      </div>
    )
  }
}

export default GenericItem