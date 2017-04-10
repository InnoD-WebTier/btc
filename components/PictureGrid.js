import React, { PropTypes } from 'react';
import Picture from '../components/Picture';

const PictureGrid = (props) => {
  const pictures = props.pictureURLs.map((url) =>
    <Picture key={url} url={url} />,
  );

  return (
    <div className="PictureGrid">
      PictureGrid!
      {pictures}
    </div>
  );
};

PictureGrid.propTypes = {
  pictureURLs: PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default PictureGrid;
