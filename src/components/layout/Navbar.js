import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
  onLogoutClick = e => {
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <nav>
          <div className='nav-wrapper z-depth-0 grey lighten-5'>
            <Link
              to='/'
              style={{
                fontFamily: 'monospace'
              }}
              className='brand-logo black-text'
            >
              <i className='material-icons'>cloud</i>
              WS-TODO
            </Link>
            <ul className='right black-text'>
              <li>
                <Link
                  to='/todo_create'
                  className='waves-effect hoverable black-text'
                >
                  Create ToDo
                </Link>
              </li>
              <li>
                <Link
                  to='/register'
                  className='waves-effect hoverable black-text'
                >
                  Register
                </Link>
              </li>
              <li>
                <Link to='/login' className='waves-effect hoverable black-text'>
                  Get New Token
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='waves-effect hoverable black-text'
                  onClick={this.onLogoutClick}
                >
                  Drop Token
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = null;

const mapDispatchToProps = { logoutUser };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
