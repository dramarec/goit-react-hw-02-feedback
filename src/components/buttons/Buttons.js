import React from 'react';
import { connect } from 'react-redux';
import { actionIncrement, actionDecrement } from '../../redux/store';

const Buttons = ({ increment, decrement }) => {
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

const mapDispatchToProps = {
    increment: actionIncrement,
    decrement: actionDecrement,
};
// const mapDispatchToProps = () => dispatch => ({
//     increment: () => dispatch(actionIncrement()),
//     decrement: () => dispatch(actionDecrement()),
// });

export default connect(null, mapDispatchToProps)(Buttons);
