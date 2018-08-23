import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '../../actions/user.actions';
import FormAuth from '../../components/formAuth/FormAuth';

class Registration extends React.PureComponent {
  /**
   * Submit handler
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { name: { value: name }, email: { value: email }, password: { value: password } } = e.target;
    const { signup } = this.props;
    signup(name, email, password);
  }

  render() {
    const { user } = this.props;

    if (user.isAuth) {
      return <Redirect to="/ideas" />;
    }

    return (
      <FormAuth user={user} title="Signup" type="registration" submitCallback={this.handleSubmit} />
    );
  }
}

Registration.propTypes = {
  user: PropTypes.shape({}).isRequired,
  signup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { signup })(Registration);
