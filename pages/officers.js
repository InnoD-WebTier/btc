import React from 'react';
import Picture from '../components/Picture';
import PictureGrid from '../components/PictureGrid';

const officers = () => (
  <div className="officers">
    <div className="hero">
      <Picture url={'/img/wallpaper.jpg'} />
    </div>
    <PictureGrid pictureURLs={['url1', 'url2', 'url3', 'url4', 'url5', 'url6']} />
  </div>
);

export default officers;
