import React, { PropTypes } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import classNames from 'classNames';

import '../css/base.scss';

const navbarHeight = 54;

export default class IndexContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    this.setState({
      open: !this.state.open,
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
          <div className={classNames('navbar', { 'navbar--open': this.state.open})}> 
            <Link
              to={prefixLink('/')}
              className="link home"
            >
              BTC
            </Link>
            <button 
              className={classNames('hamburger', 'hamburger--collapse', { 'is-active': this.state.open})} 
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
              </div>
              <Link
                to={prefixLink('/officers/')}
                className="link officers"
                onClick={this._handleClick} // TODO: HOW TO CHANGE THIS SO NAVBAR WORKS WHEN OFFICERS IS CLICKED NORMALLY 
              >
                Officers
              </Link>
              <div 
                className="committees"
                >
                Committees
                <div className="dropdown">
                  <Link
                    to={prefixLink('/research/')}
                    className="link--committees"
                  >
                    Research
                  </Link>
                  <Link
                    to={prefixLink('/scaleup/')}
                    className="link--committees"
                  >
                    Scale-Up
                  </Link>
                </div>
              </div>
              <Link
                to={prefixLink('/research/')}
                className="link--hamburger"
                onClick={this._handleClick}
              >
                Research
              </Link>
              <Link
                to={prefixLink('/scaleup/')}
                className="link--hamburger"
                onClick={this._handleClick}
              >
                Scale-Up
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
