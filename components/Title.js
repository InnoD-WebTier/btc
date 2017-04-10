import React, { PropTypes } from 'react';

const Title = (props) => (
  <div className="title">
    {props.text}
    <div className="title__separator" />
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
