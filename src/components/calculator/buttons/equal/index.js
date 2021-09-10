import React from 'react';
import PropTypes from 'prop-types';

const Equal = ({ handleEqualClick }) => (
  <div
    className="equal"
    onClick={handleEqualClick}
    onKeyDown={() => {}}
    role="none"
  >
    =
  </div>
);

Equal.propTypes = {
  handleEqualClick: PropTypes.func.isRequired,
};

export default Equal;
