import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onChange }) => {
    return options.map(option => (
        <button type="button" key={option} name={option} onClick={onChange}>
            {option.toUpperCase()}
        </button>
    ));
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onChange: PropTypes.func.isRequired,
};
