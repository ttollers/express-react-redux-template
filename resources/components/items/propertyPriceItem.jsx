import React from 'react'
import R from 'ramda'

class PropertyPriceItem extends React.Component {

  getDirection(amount) {
    return amount > 0 ? "up" : "down";
  }

  addCommasToNumber(stringNumber) {
    return R.reverse(
      R.map(R.reverse)(
        R.reject(R.isEmpty)(
          R.reverse(stringNumber).split(/(\d{0,3})/)
        )
      )
    ).join(",");
  }

  formatPrice(stringOrInt) {
    const stringPrice = `${stringOrInt}`;
    let out;
    if (stringPrice.startsWith("-")) {
      out = this.addCommasToNumber(stringPrice.slice(1));
      out = `-£${out}`;
    } else {
      out = this.addCommasToNumber(stringPrice);
      out = `£${out}`;
    }
    return out;
  }

  render() {

    const { data, title } = this.props.item;

    return (
      <div className="post-content">
        <div className="enhanced-banner">
          <div className="enhanced-banner-inner">
            <span className="enhanced-banner-location">{title}</span>
            <h2>Property Prices</h2>
          </div>
        </div>
        <div className="zoopla-data">

          <div className="property-average">
            <p>Average house prices in {title}</p>
            <span>{this.formatPrice(data.average)}</span>
          </div>

          <ul className="property-change">
            <li>
              <span className={`property-change-direction ${this.getDirection(data.threeMonth)}`}></span>
              <span className="property-change-duration">3 Months</span>
              <span className="property-change-amount">{this.formatPrice(data.threeMonth)}</span>
            </li>
            <li>
              <span className={`property-change-direction ${this.getDirection(data.oneYear)}`}></span>
              <span className="property-change-duration">1 Year</span>
              <span className="property-change-amount">{this.formatPrice(data.oneYear)}</span>
            </li>
            <li>
              <span className={`property-change-direction ${this.getDirection(data.fiveYear)}`}></span>
              <span className="property-change-duration">5 Years</span>
              <span className="property-change-amount">{this.formatPrice(data.fiveYear)}</span>
            </li>
          </ul>
          <p className="credit">House Prices InYourArea By Zoopla</p>

        </div>
      </div>
    )
  }
}

export default PropertyPriceItem