import React, { PropTypes } from 'react';

const Picture = (props) => (
  <div className="picture">
    <img src={props.url} alt={props.url} />
  </div>
);

Picture.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Picture;
