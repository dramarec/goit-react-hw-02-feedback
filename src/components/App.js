import React, { Component } from 'react';
import Buttons from './buttons/Buttons';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Number from './number/Number';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    updateProp = e => {
        const { name } = e.target;
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
                    <h1>Practice#6 Feedback_Redux</h1>
                </Section>
                <Number />

                <Section title="Please leave feedback">
                    <Buttons />
                    <FeedbackOptions
                        // options={this.state}
                        // options={(good, neutral, bad)}
                        options={Object.keys(this.state)}
                        onChange={this.updateProp}
                    />
                </Section>

                <Section title="Statistic">
                    {this.countTotalFeedback() ? (
                        <Statistics
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
