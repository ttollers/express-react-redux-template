import React from 'react';
import FeedItem from "./feedItem.jsx";
import SideBar from "./sideBar.jsx";
import SideBarItem from "./sideBarItem.jsx";
import { browserHistory } from 'react-router'
import { is, objOf, map } from "ramda"

class FeedComponent extends React.Component {



  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  sideBarData(sideBarItems) {
    return {
      sideBarItems,
      postcode: this.props.routeParams.postcode,
      placeName: this.props.location.query.placeName
    }
  }

  render() {
    if(this.props.isFetching === true) {
      return null;
    }

    if (this.props.isHidden) {
      const placeName = this.props.location.query.placeName;
      const placeNames = typeof placeName !== "string" ?
        map(objOf("name"), placeName) :
        Array.of(objOf("name", placeName));

      this.props.getFeedRequest(this.props.routeParams.postcode, placeNames);
      return null;
      //browserHistory.push(`/a/${this.props.routeParams.postcode}`)
    } else {
      const feeds = this.props.feed.items.map((feedItem, i) => {
        return (
          <FeedItem key={i} item={feedItem}/>
        );
      });

      const sideBarItems = this.props.feed.staticItems.map((feedItem, i) => {
        return (
          <SideBarItem key={i} item={feedItem}/>
        );
      });

      return (
        <div id="homepage" className="page-feed">
          <header className="main-header">
            <a title="" className="scroll logo" onClick={() => browserHistory.push("/")}>InYourArea.co.uk</a>
          </header>

          <section className="splash"></section>

          <section className="main">

            <SideBar data={this.sideBarData(sideBarItems)} />

            <section className="feed">
              {feeds}
            </section>
          </section>

          <footer className="main-footer">
            <section className="main">
              Footer here
            </section>
          </footer>
        </div>
      )
    }
  }
}

export default FeedComponent
