import { Component } from 'react';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class FeedbackWidget extends Component {

  state = { ...INITIAL_STATE };


  totalTot = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    let gettingPercentage = (this.state.good / this.totalTot()) * 100;
    return gettingPercentage.toFixed();
  };


  handleClick = event => {
    event.preventDefault();
    let { good, neutral, bad } = this.state;
    switch (event.target.textContent) {
      case 'good':
        good++;
        break;
      case 'neutral':
        neutral++;
        break;
      case 'bad':
        bad++;
        break;
      default:
        return;
    }
    this.setState({ good, neutral, bad });
  };


  render() {
    if (this.state.bad === 0 && this.state.neutral === 0 && this.state.good === 0) {
      return (
        <div className={'feedback__container'}>
          <h1>Please leave feedback</h1>
          <button onClick={this.handleClick}>good</button>
          <button onClick={this.handleClick}>neutral</button>
          <button onClick={this.handleClick}>bad</button>
          <p><b>There is no feedback given</b></p>
        </div>
      );
    } else
      return (
        <div className={'feedback__container'}>
          <div>
            <h1>Please leave feedback</h1>
            <button onClick={this.handleClick}>good</button>
            <button onClick={this.handleClick}>neutral</button>
            <button onClick={this.handleClick}>bad</button>
          </div>
          <div>
            <h1>Statistics</h1>
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total: {this.totalTot()}</li>
              <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
            </ul>
          </div>
        </div>
      );
  }
}

export default FeedbackWidget;
