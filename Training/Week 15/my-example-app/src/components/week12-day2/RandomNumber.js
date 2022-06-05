import React from "react";

class RandomNumber extends React.Component {
  // define the constructor
  constructor() {
    super();
    this.state = {
      randomNumber: 0,
      pastRandomNumbers: [],
    };

    // bind methods to be used by events within our component
    this.changeRandomNumber = this.changeRandomNumber.bind(this);
  }

  // other functions/methods used within component
  getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  changeRandomNumber() {
    let currentPastRandomNumbers = this.state.pastRandomNumbers;
    let currentRandomNumber = this.state.randomNumber;
    // store the current randomNumber into the states pastRandomNumbers array
    currentPastRandomNumbers.push(currentRandomNumber);

    this.setState({ pastRandomNumbers: currentPastRandomNumbers });

    console.log(this.state.pastRandomNumbers);
    // generate a new random number using the getRandomNumber method
    this.setState({ randomNumber: this.getRandomNumber(this.props.maxNumber) });
  }

  // lifecycle methods (componentWillMount, componentDidMount, shouldComponentUpdate, componentWillUpdate, componentWillUnmount)
  UNSAFE_componentWillMount() {
    // set up the operation that should occur prior to the component being rendered in the browser
    console.log(this.state.pastRandomNumbers);

    //console.log(`random number: ${this.getRandomNumber(this.props.maxNumber)}`)
    this.setState({ randomNumber: this.getRandomNumber(this.props.maxNumber) });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.randomNumber === nextState.randomNumber) {
      console.log(`No need for the component to update!!!`);
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.dir(this);

    if (this.state.randomNumber % 2 === 1) {
      return (
        <div className="random-number">
          <p>The random number generated is ODD</p>
          <button onClick={this.changeRandomNumber}>
            Get New Random Number
          </button>
        </div>
      );
    } else {
      return (
        <div className="random-number">
          <p>The random number generated is EVEN</p>
          <button onClick={this.changeRandomNumber}>
            Get New Random Number
          </button>
        </div>
      );
    }
    // return (
    //   <div className="random-number">
    //     <h3>
    //       Random Number:
    //       <span className="span-number">{this.state.randomNumber}</span>
    //     </h3>

    //     <button onClick={this.changeRandomNumber}>Get New Random Number</button>
    //   </div>
    // );
  }
}

export default RandomNumber;
