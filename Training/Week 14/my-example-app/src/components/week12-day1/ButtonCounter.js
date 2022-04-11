import React from "react";
import "./ButtonCounter.css";

class ButtonCounter extends React.Component {
  // define what data is managed when our class component is instantiated using a constructor method
  constructor() {
    super();
    this.state = {
      clicks: 0,
      incrementCount: 0,
      decrementCount: 0,
      overallAmount: 0
    };
    this.handleIncreaseCountClick = this.handleIncreaseCountClick.bind(this);
    this.handleDecreaseCountClick = this.handleDecreaseCountClick.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick methods
  handleIncreaseCountClick() {
      this.handleClick()
      this.setState({ 
          incrementCount: this.state.incrementCount + 1, 
          overallAmount: this.state.overallAmount + 1 });
    }
    
    handleDecreaseCountClick() {
      this.handleClick()
    this.setState({ 
        decrementCount: this.state.decrementCount + 1,
        overallAmount: this.state.overallAmount - 1
    });
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  // render expression/statement
  render() {
    return (
      <div className="button-counter">
        <div className="click-displays">
          <h3>Clicks: {this.state.clicks}</h3>
          <h3>{ this.props.increment === "" ? "Increase Count" : this.props.increment}: {this.state.incrementCount}</h3>
          <h3>{ this.props.decrement === "" ? "Decrease Count" : this.props.decrement }: {this.state.decrementCount}</h3>
          <h3>Overall Count: {this.state.overallAmount}</h3>
        </div>

        <div className="buttons">
          <button onClick={this.handleIncreaseCountClick}>Increase Count</button>
          <button onClick={this.handleDecreaseCountClick}>Decrease Count</button>
        </div>
      </div>
    );
  }
}

export default ButtonCounter;
