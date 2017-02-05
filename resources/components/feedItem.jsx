import React from 'react'
import AutoDetectingItem from "./items/autoDetectingItem.jsx";
import TimeAgo from 'react-timeago'

class FeedItem extends React.Component {

  addTimeIfProvided(byline, updated) {
    if (updated && byline) {
      return (<span className="post-meta">{byline} - <TimeAgo date={updated}/></span>)
    }
    if (updated) {
      return (<span className="post-meta"><TimeAgo date={updated}/></span>)
    }
    if (byline) {
      return (<span className="post-meta">{byline}</span>)
    }
  }
  render() {

    const { type, label, byline, updated } = this.props.item;


    return (
      <div className={`post ${type}`}>
        <header className="post-header">
          <div className="post-icon"></div>
          <div className="post-meta-wrap">
            <h3 className="post-type">{label}</h3>
            {this.addTimeIfProvided(byline, updated)}
          </div>
        </header>
        <AutoDetectingItem item={this.props.item} />
        <footer className="post-footer">
          <ul>
            <li><a href="" className="comments-link">Comments</a></li>
            <li><a href="" className="share-facebook">Facebook</a></li>
            <li><a href="" className="share-twitter">Twitter</a></li>
            <li><a href="" className="share-email">Email</a></li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default FeedItem
