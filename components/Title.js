import React, { PropTypes } from 'react';

const Title = ({ text }) => (
  <div className="title">
    {text}
    <div className="title__separator" />
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
