import React, { PropTypes } from 'react';

const PictureGrid = () => {
  const pictures = [{
    url: 'blah',
  }];

  return (
    <div className="PictureGrid">
      PictureGrid!
      {pictures[0].url}
    </div>
  );
};

PictureGrid.propTypes = {
  pictureURLs: PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default PictureGrid;
