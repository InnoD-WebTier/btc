import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import '../css/base.scss';

const IndexContainer = ({ children }) => (
  <div>
    <Headroom
      style={{
        background: '#252525',
      }}
    >
      <Link
        to={prefixLink('/')}
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Title
      </Link>
    </Headroom>
    <div>
      {children}
    </div>
  </div>
);

IndexContainer.propTypes = {
  children: PropTypes.element,
};

IndexContainer.defaultProps = {
  children: null,
};

export default IndexContainer;

