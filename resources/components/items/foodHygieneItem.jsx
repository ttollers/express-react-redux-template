import React from 'react'

class FoodHygieneItem extends React.Component {

  createImprovementNotice(rating) {
    return (Number(rating) === 0) ? "Urgent Improvements Necessary" : "Major Improvements Necessary";
  }

  createRestaurantItems(restaurants) {
    return restaurants.map((restaurant, i) => {
      return (
        <li key={i}>
          <h3><a href={restaurant.link} target="_blank">{restaurant.name}</a> <span>{this.createImprovementNotice(restaurant.rating)}</span></h3>
          <img src={`/images/fhrs_${restaurant.rating}_en-gb.jpg`} />
        </li>
      )
    });
  }

  render() {

    const { data, logo, link } = this.props.item;

    return (
      <div className="post-content">
        <div className="enhanced-banner">
          <div className="enhanced-banner-inner">
            <span className="enhanced-banner-location">Local</span>
            <h2>Food Hygiene</h2>
          </div>
        </div>

        <h2>These local restaurants have the <span>worst</span> food hygiene rating </h2>
        <img src={logo} />

        <ul className="food-ratings">
          {this.createRestaurantItems(data)}
        </ul>

        <a className="btn" href={link} target="_blank">Read more</a>

      </div>
    )
  }
}

export default FoodHygieneItem