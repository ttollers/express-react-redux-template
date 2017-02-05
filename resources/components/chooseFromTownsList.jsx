import React from 'react'
import { isNil, contains, append, pluck, findIndex, remove } from "ramda";
import { browserHistory } from 'react-router'

class ChooseFromTownsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      towns: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePostcodeChange = this.handlePostcodeChange.bind(this);
    this.handlePostcodeSubmit = this.handlePostcodeSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const chosenTownsInOrder = this.props.towns.options.filter(town => contains(town, this.state.towns));
    this.props.getFeedRequest(this.props.towns.postcode, chosenTownsInOrder);
  }

  handleChange(town) {
    let newState;

    if(!contains(town, this.state.towns)) {
      newState = append(town, this.state.towns)
    } else {
      const i = findIndex(x => x === town, this.state.towns);
      newState = remove(i, 1, this.state.towns)
    }
    this.setState({
      towns: newState
    });
  }

  handlePostcodeChange(event) {
    this.setState({postcodeChange: event.target.value.toUpperCase()});
  }

  handlePostcodeSubmit(event) {
    this.props.getTownsRequest(this.state.postcodeChange);
    event.preventDefault();
  }

  render() {
    if (isNil(this.props.towns)) {
      this.props.getTownsRequest(this.props.routeParams.postcode.toUpperCase());
      return null;
    }

    const options = this.props.towns.options.map((town, i) => {
      const selected = contains(town.name, pluck("name", this.state.towns));
      return (
        <li key={i} className={selected ? "selected" : ""} onClick={this.handleChange.bind(this, town)}>{town.name}</li>
      )
    });

    const canSave = this.state.towns.length === 0 ? "unselected" : "selected";

    return (
      <div id="homepage" className="page-select-area">

        <section className="select-area-overlay">

          <header className="select-area-header">
            <div className="inner">
              <span className="select-area-logo" onClick={() => browserHistory.push("/")}>InYourArea.co.uk</span>
            </div>
          </header>

          <div className="your-postcode-search">
            <form onSubmit={this.handlePostcodeSubmit}>
              <input value={this.state.postcodeChange !== void 0 ? this.state.postcodeChange : this.props.routeParams.postcode} onChange={this.handlePostcodeChange} />
                <input type="submit" />
            </form>
          </div>

          <section className="available-areas">
            <div className="inner">
              <h1>Select <span>1 or more</span> areas that interest you:</h1>
              <ul>
                {options}
              </ul>
              <a className={`bottom-next ${canSave}`} onClick={this.handleSubmit}>Save</a>
            </div>
          </section>
        </section>
        <div className="selector-background"></div>
      </div>
    )

  }

}

export default ChooseFromTownsList
