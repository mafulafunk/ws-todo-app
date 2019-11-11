import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-1">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo black-text">
              <i className="material-icons">list</i>
              WS-TODO
            </Link>
            <ul className="right hide-on-med-and-down black-text">
              <li>Sass</li>
              <li>bar</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;