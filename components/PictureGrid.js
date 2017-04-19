import React, { PropTypes } from 'react';
import Picture from '../components/Picture';

const PictureGrid = (props) => {
  const pictureItems = props.pictures.map((picture) =>
    <Picture
      key={picture.name}
      url={picture.url}
      name={picture.name}
      title={picture.title}
    />,
  );
  return (
    <div className="pictureGrid">
      {pictureItems}
    </div>
  );
};

PictureGrid.propTypes = {
  pictures: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default PictureGrid;
