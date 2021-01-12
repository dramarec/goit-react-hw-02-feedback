import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    updateProp = event => {
        const { name } = event.target;
        this.setState(state => ({
            [name]: state[name] + 1,
        }));
    };
    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };
    countPositiveFeedbackPercentage = () => {
        return this.countTotalFeedback()
            ? (this.state.good / this.countTotalFeedback()) * 100
            : 0;
    };

    render() {
        // const { good, neutral, bad } = this.state;
        return (
            <>
                <Section>
                    <h1>Home Work #2 Feedback</h1>
                </Section>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onChange={this.updateProp}
                    />
                </Section>
                <Section title="Statistic">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            // good={good}
                            // neutral={neutral}
                            // bad={bad}
                            {...this.state}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage().toFixed()}
                        />
                    ) : (
                        <Notification message="No feedback given" />
                    )}
                </Section>
            </>
        );
    }
}
