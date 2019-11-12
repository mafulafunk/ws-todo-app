import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="z-depth-1">
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
              <li>
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn waves-effect hoverable white black-text">
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn waves-effect hoverable white black-text">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div class="row">
          <div class="col s1">1</div>
          <div class="col s1">2</div>
          <div class="col s1">3</div>
          <div class="col s1">4</div>
          <div class="col s1">5</div>
          <div class="col s1">6</div>
          <div class="col s1">7</div>
          <div class="col s1">8</div>
          <div class="col s1">9</div>
          <div class="col s1">10</div>
          <div class="col s1">11</div>
          <div class="col s1">12</div>
        </div>

      </div>
    );
  }
}
export default Navbar;