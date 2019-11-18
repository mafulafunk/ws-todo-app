import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class Dashboard extends Component {

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
      <div style={{ height: "75vh" }} className="container">
        <div className="row">
          <div className="col s12 center-align">
            <div>
              <b>This is the dashboard.</b>
              <p>*{this.props.auth.user.id}*</p>
              <p>*{this.props.auth.user.name}*</p>
              <p>*{this.props.auth.user.myPayload}*</p>
              <p>*{this.props.auth.user.iat}*</p>
              <p>*{this.props.auth.user.exp}*</p>
              <p>*{this.state.validFor}*</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = { logoutUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);