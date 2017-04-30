import React from 'react';
import { prefixLink } from 'gatsby-helpers'; // eslint-disable-line
import PictureGrid from '../components/PictureGrid';
import Title from '../components/Title';

const team = () => (
  <div className="officers">
    <Title text="MEET OUR TEAM" />
    <PictureGrid
      pictures={[{
        url: prefixLink('/img/Andrew_Wang.jpg'),
        name: 'Andrew Wang',
        title: 'President',
      },
      {
        url: prefixLink('/img/Brandon_Yee.jpg'),
        name: 'Brandon Yee',
        title: 'Internal VP',
      },
      {
        url: prefixLink('/img/Teddy_Sun.jpg'),
        name: 'Teddy Sun',
        title: 'External VP',
      },
      {
        url: prefixLink('/img/Brandon_Luo.jpg'),
        name: 'Brandon Luo',
        title: 'Treasurer',
      },
      {
        url: prefixLink('/img/Phil_Kim.jpg'),
        name: 'Phil Kim',
        title: 'Research Lead',
      },
      {
        url: prefixLink('/img/Raleigh_Lukas.jpg'),
        name: 'Raleigh Lukas',
        title: 'Filtration Team Lead',
      },
      {
        url: prefixLink('/img/Katrina_Mazloomian.jpg'),
        name: 'Katrina Mazloomian',
        title: 'Reactor Team Lead',
      },
      {
        url: prefixLink('/img/Jonathan_Ngan.jpg'),
        name: 'Jonathan Ngan',
        title: 'Purification Team Lead',
      },
      {
        url: prefixLink('/img/Austin_Li.jpg'),
        name: 'Austin Li',
        title: 'Logistics/Safety Lead',
      }]}
    />
  </div>
);

export default team;

