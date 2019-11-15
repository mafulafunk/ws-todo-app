import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavbarLink } from "./NavbarLink";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { validFor: null };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { user } = this.props.auth;
    if (user) {
      this.setState({
        validFor: Math.trunc(user.exp - (Date.now() / 1000))
      });
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <nav className="nav-extended z-depth-1">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="brand-logo black-text">
              <i className="material-icons">list</i>
              WS-TODO
            </Link>
            <ul className="right black-text">
              {!user.name &&
                <li><NavbarLink target="register" name="Register"></NavbarLink></li>
              }
              {!user.name &&
                <li><NavbarLink target="login" name="Log In"></NavbarLink></li>
              }
              {user.name &&
                <li><button
                  style={{
                    width: "120px",
                    borderRadius: "6px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn waves-effect hoverable white black-text"
                  onClick={this.onLogoutClick}>
                  Logout
            </button>
                </li>
              }
            </ul>
          </div>
          {user.name &&
            <div className="nav-content white">
              <span className="black-text">
                <b>Hi : </b> {user.name.split(" ")[0]},
                <b> loggged in for : </b>
                {this.state.validFor}
                <b> secs.</b>
              </span>
            </div>
          }

        </nav>
        <div className="row">
          <div className="col s1">1</div>
          <div className="col s1">2</div>
          <div className="col s1">3</div>
          <div className="col s1">4</div>
          <div className="col s1">5</div>
          <div className="col s1">6</div>
          <div className="col s1">7</div>
          <div className="col s1">8</div>
          <div className="col s1">9</div>
          <div className="col s1">10</div>
          <div className="col s1">11</div>
          <div className="col s1">12</div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = { logoutUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
