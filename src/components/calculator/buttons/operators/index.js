import React from 'react';
import PropTypes from 'prop-types';

const Operators = ({ handleSignClick }) => (
  <div
    className="operators"
    onClick={handleSignClick}
    onKeyDown={() => {}}
    role="none"
  >
    <div>+</div>
    <div>-</div>
    <div>*</div>
    <div>/</div>
  </div>
);

Operators.propTypes = {
  handleSignClick: PropTypes.func.isRequired,
};

export default Operators;
