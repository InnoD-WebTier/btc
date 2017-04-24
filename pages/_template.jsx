import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import classnames from 'classnames';

import '../css/base.scss';

const navbarHeight = 54;

export default class IndexContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this._handleClick = this._handleClick.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleClick(e) {
    this.setState({
      open: !this.state.open,
    });
  }

  _handleClose(e) {
    this.setState({
      open: false,
    });
  }

  render () {
    return (
      <div>
        <Headroom
          wrapperStyle={{
            maxHeight: navbarHeight 
          }}
        >
          <div className={classnames('navbar', { 'navbar--open': this.state.open})}> 
            <Link
              to={prefixLink('/')}
              className="link home"
            >
              BTC
            </Link>
            <button 
              className={classnames('hamburger', 'hamburger--collapse', { 'is-active': this.state.open})} 
              type="button"
              onClick={this._handleClick}
            >
              <span className="hamburger-box"> 
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="container">
              <div className="container__media">
                <a href="http://www.facebook.com"><i className="fa fa-facebook"></i></a>
                <a href="http://www.instagram.com"><i className="fa fa-instagram"></i></a>
                <a href="http://www.twitter.com"><i className="fa fa-twitter"></i></a>
                <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
              <Link
                to={prefixLink('/tech/')}
                className="link"
                onClick={this._handleClose} 
              >
                TECH
              </Link>
              <Link
<<<<<<< HEAD
                to={prefixLink('/tech/')}
=======
                to={prefixLink('/team/')}
>>>>>>> fee790c2ff6dc08ca58d54fcd972fbe62386629c
                className="link"
                onClick={this._handleClose}
              >
                TEAM
              </Link>
            </div>
          </div>
        </Headroom>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
};

IndexContainer.propTypes = {
  children: PropTypes.element,
};

IndexContainer.defaultProps = {
  children: null,
};
