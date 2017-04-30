import React, { PropTypes } from 'react';
import Picture from '../components/Picture';

const PictureGrid = ({ pictures }) => (
  <div className="pictureGrid">
    {pictures.map((picture) => (
      <Picture
        key={picture.name}
        url={picture.url}
        name={picture.name}
        title={picture.title}
      />
      ),
    )}
  </div>
);

PictureGrid.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default PictureGrid;
