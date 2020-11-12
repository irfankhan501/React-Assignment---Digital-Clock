import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    this.intervalID = null;
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.setState({ time: new Date() }),
      1000
    );
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }
  getTimeString() {
    const curTime = this.state.time;
    const [hours, minutes, seconds] = [
      curTime.getHours(),
      curTime.getMinutes(),
      curTime.getSeconds(),
    ];

    const pmOrAm = hours > 12 ? "PM" : "AM";
    const twevelHourFormat = hours > 12 ? hours - 12 : hours;
    const hoursString = this.pudTwoNumberDigit(twevelHourFormat);
    const minutesString = this.pudTwoNumberDigit(minutes);
    const secondsString = this.pudTwoNumberDigit(seconds);

    const time = `${hoursString}:${minutesString}:${secondsString} ${pmOrAm}`;
    return time;
  }

  pudTwoNumberDigit(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }
  render() {
    return (
      <>
        <div className="Clock">
          <h3 id="time">{this.getTimeString()}</h3>
        </div>
      </>
    );
  }
}

export default App;
