import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/user.actions';
import FormAuth from '../../components/formAuth/FormAuth';

class Login extends React.PureComponent {
  /**
   * Submit handler
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { email: { value: email }, password: { value: password } } = e.target;
    const { login } = this.props;
    login(email, password);
  }

  render() {
    const { user } = this.props;

    if (user.isAuth) {
      return <Redirect to="/ideas" />;
    }

    return (
      <FormAuth user={user} title="Login" type="login" submitCallback={this.handleSubmit} />
    );
  }
}

Login.propTypes = {
  user: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { login })(Login);
