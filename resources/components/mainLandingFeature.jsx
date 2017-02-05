
import React from 'react'

class Sidebar extends React.Component {

  render() {
    return (
      <section id="features" className="main landing-feature">
        <div className={`landing-feature-text ${this.props.type}`}>
          <div className="post-icon"></div>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className="landing-feature-pic">
          <img src="/images/post-news.png"/>
        </div>
      </section>
    )
  }

}

export default Sidebar
