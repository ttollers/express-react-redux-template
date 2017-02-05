import React from 'react'
import TweetEmbed from 'react-tweet-embed'

class TweetItem extends React.Component {
  render() {

    const { tweetId } = this.props.item;

    return (
      <div className="post-content">
        <TweetEmbed id={tweetId}></TweetEmbed>
      </div>
    )
  }
}

export default TweetItem