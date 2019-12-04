import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validFor: null,
      stillValid: 'false'
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const { user } = this.props.auth;
    if (user) {
      const validInSecs = Math.trunc(user.exp - Date.now() / 1000);
      this.setState({
        validFor: validInSecs,
        stillValid: validInSecs > 0 ? 'true' : 'false'
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
        <h3>This is the dashboard.</h3>
        <div className='row'>
          <div className='col s6'>*user.id*</div>
          <div className='col s6'>::{user.id}</div>
          <div className='col s6'>*user.name*</div>
          <div className='col s6'>::{user.name}</div>
          <div className='col s6'>*user.myPayload*</div>
          <div className='col s6'>::{user.myPayload}</div>
          <div className='col s6'>*user.iat*</div>
          <div className='col s6'>::{user.iat}</div>
          <div className='col s6'>*user.exp*</div>
          <div className='col s6'>::{user.exp}</div>
          <div className='col s6'>*validFor*</div>
          <div className='col s6'>::{this.state.validFor}</div>
          <div className='col s6'>*token.stillValid*</div>
          <div className='col s6'>::{this.state.stillValid}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
