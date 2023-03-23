import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import { Component } from 'react';
import Notification from './Notification/Notification';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    this.handleGoodClick = this.handleGoodClick.bind(this);
    this.handleNeutralClick = this.handleNeutralClick.bind(this);
    this.handleBadClick = this.handleBadClick.bind(this);
  }

  handleGoodClick() {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  }

  handleNeutralClick() {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  }

  handleBadClick() {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  }

  getSumOfFeedbacks() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  getPositiveFeedbackPercentage() {
    const { good } = this.state;
    const sumOfFeedbacks = this.getSumOfFeedbacks();

    if (sumOfFeedbacks === 0) {
      return 0;
    }

    return ((good / sumOfFeedbacks) * 100).toFixed();
  }

  render() {
    const { good, neutral, bad } = this.state;
    const sumOfFeedbacks = this.getSumOfFeedbacks();
    const positiveFeedbackPercentage = this.getPositiveFeedbackPercentage();

    let sectionContent;
    if (sumOfFeedbacks === 0) {
      sectionContent =  <Notification></Notification>
    } else {
      sectionContent =  <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={sumOfFeedbacks}
        positivePercentage={positiveFeedbackPercentage}
      />
    }

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{
              good: this.handleGoodClick,
              neutral: this.handleNeutralClick,
              bad: this.handleBadClick,
            }}
          />
        </Section>
        <Section title="Statistics">
          {sectionContent}
        </Section>
      </>
    );
  }
}
