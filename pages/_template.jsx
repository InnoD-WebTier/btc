import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import '../css/base.scss';

const navbarHeight = 54;

const IndexContainer = ({ children }) => (
  <div>
    <Headroom
      wrapperStyle={{
        maxHeight: navbarHeight
      }}
    >
      <div className="navbar">
        <Link
          to={prefixLink('/')}
          className="link home"
          style={{
            display: 'inline-block',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          BTC
        </Link>
        <Link
          to={prefixLink('/officers')}
          className="link officers"
          style={{
            display: 'inline-block',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Officers
        </Link>
        <div 
          className="committees"
          style={{
            display: 'inline-block'
          }}>
          Committees
          <Link
            to={prefixLink('/research')}
            className="link research"
            style={{
              color: 'white',
              display: 'none',
            }}
          >
            Officers
          </Link>
          <Link
            to={prefixLink('/scaleup')}
            className="link scaleup"
            style={{
              color: 'white',
              display: 'none',
            }}
          >
            Officers
          </Link>
        </div>
      </div>
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

