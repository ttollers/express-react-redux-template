import React from 'react'
import MainLandingFeature from "./mainLandingFeature.jsx"

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    this.props.getTownsRequest(this.state.value);
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <section className="landing-splash">

          <header className="landing-header">
            <span title="" className="scroll logo">InYourArea.co.uk</span>
          </header>

          <h1>Get the <b>latest news</b> and <b>information</b> for your <b>local area</b></h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="postcode" value={this.state.value} onChange={this.handleChange}
                   placeholder="Enter your postcode"/>
            <input type="submit"/>
          </form>

          <a href="#features" className="more-features"></a>

        </section>


        <section className="landing-video">
          <div>
            <div className="landing-video-player">
              <iframe src='https://player.vimeo.com/video/200960850' frameBorder='0' ></iframe>
            </div>
          </div>
        </section>

        <MainLandingFeature
          title="Local News"
          description="InYourArea aggregates all the latest news for your local area from news sites, blogs and social networks. We are the only service that gives you a 360 view of up to the minute updates on your area."
          type="news"
        />

        <MainLandingFeature
          title="Traffic & Travel"
          description="Get realtime updates on local station delays and announcements, road disruptions and works, local bus delays and more"
          type="traffic"
        />

        <MainLandingFeature
          title="Things to do"
          description="InYourArea scour the web for things happening near you. Whether it be a day out with the family or gigs nearby, we personalise ‘Whats On’ updates just for you."
          type="traffic"
        />

        <MainLandingFeature
          title="Local Crime Statistics"
          description="Get the latest news and updates on crime in your area, from realtime alerts from your local police to monthly summaries of how crime has changed in your area and the actions police are taking to combat it."
          type="traffic"
        />

        <MainLandingFeature
          title="Food Hygiene Ratings"
          description="Get the latest information on restaurants in your area, from food hygiene ratings to special offers and new openings"
          type="traffic"
        />

        <MainLandingFeature
          title="Email Updates"
          description="Get a daly news updates of things happening in your area sent directly to your email inbox, making it easier than ever to know your area."
          type="traffic"
        />

        <section className="landing-splash bottom-splash">
          <h1>And so much more!</h1>
          <p>There is so much more we can list... It would be a lot easier to see what’s on offer by simply entering
            your
            post code!</p>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="postcode" value={this.state.value} onChange={this.handleChange}
                   placeholder="Enter your postcode"/>
            <input type="submit"/>
          </form>
        </section>
      </div>
    )
  }
}

export default Home
