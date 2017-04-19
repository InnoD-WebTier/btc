import React, { PropTypes } from 'react';

const Picture = (props) => (
  <div className="picture">
    <div className="picture__container">
      <img src={props.url} alt={props.url} />
      <div className="picture__overlay" />
      <div className="picture__name">
        {props.name}
      </div>
      <div className="picture__title">
        {props.title}
      </div>
    </div>
  </div>
);

Picture.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Picture;
