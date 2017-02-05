import React from 'react'
import GenericItem from "./genericItem.jsx";
import FixMyStreetItem from "./fixMyStreetItem.jsx";
import PropertyPriceItem from "./propertyPriceItem.jsx";
import SingleWhatsOnItem from "./singleWhatsOnItem.jsx";
import MultiWhatsOnItem from "./multiWhatsOnItem.jsx";
import CrimeStatsItem from "./crimeStatsItem.jsx";
import FoodHygieneItem from "./foodHygieneItem.jsx";
import TweetItem from "./tweetItem.jsx";

class AutoDetectingItem extends React.Component {

  render() {
    const item = this.props.item;
    switch (item.type) {
      case 'fixmystreet':
        return (
          <FixMyStreetItem item={item}/>
        );
      case 'whats-on':
        if(item.specificType === "multi") {
          return (
            <MultiWhatsOnItem item={item}/>
          );
        } else {
          return (
            <SingleWhatsOnItem item={item}/>
          );
        }
      case 'whats-on':
        return (
          <MultiWhatsOnItem item={item}/>
        );
      case 'property':
        return (
          <PropertyPriceItem item={item}/>
        );
      case 'food':
        return (
          <FoodHygieneItem item={item}/>
        );
      case 'twitter':
        return (
          <TweetItem item={item}/>
        );
      case 'crime':
        if(item.specificType === "stats") {
          return (
            <CrimeStatsItem item={item}/>
          );
        } else {
          return (
            <GenericItem item={item}/>
          );
        }
      default:
        return (
          <GenericItem item={item}/>
        );
    }
  }
}

export default AutoDetectingItem