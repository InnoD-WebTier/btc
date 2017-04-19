import React from 'react';
import PictureGrid from '../components/PictureGrid';
import Title from '../components/Title';

const officers = () => (
  <div className="officers">
    <Title text="MEET OUR TEAM" />
    <PictureGrid
      pictures={[{
        url: '/img/Andrew_Wang.jpg',
        name: 'Andrew Wang',
        title: 'President',
      },
      {
        url: '/img/Brandon_Yee.jpg',
        name: 'Brandon Yee',
        title: 'Internal VP',
      },
      {
        url: '/img/Teddy_Sun.jpg',
        name: 'Teddy Sun',
        title: 'External VP',
      },
      {
        url: '/img/Brandon_Luo.jpg',
        name: 'Brandon Luo',
        title: 'Treasurer',
      },
      {
        url: '/img/Phil_Kim.jpg',
        name: 'Phil Kim',
        title: 'Research Lead',
      },
      {
        url: '/img/Raleigh_Lukas.jpg',
        name: 'Raleigh Lukas',
        title: 'Filtration Team Lead',
      },
      {
        url: '/img/Katrina_Mazloomian.jpg',
        name: 'Katrina Mazloomian',
        title: 'Reactor Team Lead',
      },
      {
        url: '/img/Jonathan_Ngan.jpg',
        name: 'Jonathan Ngan',
        title: 'Purification Team Lead',
      },
      {
        url: '/img/Austin_Li.jpg',
        name: 'Austin Li',
        title: 'Logistics/Safety Lead',
      }]}
    />
  </div>
);

export default officers;

