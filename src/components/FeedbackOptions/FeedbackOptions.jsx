import React from 'react';

const FeedbackOptions = ({ options, onChange }) => {
    return options.map(option => (
        <button type="button" key={option} name={option} onClick={onChange}>
            {option.toUpperCase()}
        </button>
    ));
};

export default FeedbackOptions;
