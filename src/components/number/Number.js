import React from 'react';
import { connect } from 'react-redux';

const Number = ({ number = 0 }) => {
    return <p>{number}</p>;
};

const mapStateToProps = state => {
    return { number: state.value };
};

export default connect(mapStateToProps)(Number);
