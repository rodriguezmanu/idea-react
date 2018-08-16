import React from 'react';
import {
  Visibility,
  VisibilityOff,
  AccountCircle,
  Security,
} from '@material-ui/icons/';
import {
  Typography,
  IconButton,
  InputAdornment,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core/';
import './Login.scss';
import { Link, Redirect } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/user.actions';

class Login extends React.PureComponent {
  state = {
    email: '',
    password: '',
    showPassword: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email: { value: email }, password: { value: password } } = e.target;
    const { login } = this.props;
    login(email, password);
  }


  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { showPassword, password, email } = this.state;
    const { user } = this.props;

    return (
      <div className="login-component">
        <ValidatorForm
          onSubmit={this.handleSubmit}
        >
          <Card className="card-component">
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Login
              </Typography>
              <div>
                <TextValidator
                  label="Email"
                  margin="dense"
                  fullWidth
                  name="email"
                  autoComplete="username"
                  onChange={this.handleChange}
                  value={email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  validators={['required', 'isEmail']}
                  errorMessages={['This field is required.', 'Email is not valid']}
                />

                <div>
                  <TextValidator
                    fullWidth
                    label="Password"
                    margin="dense"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    name="password"
                    onChange={this.handleChange}
                    autoComplete="current-password"
                    validators={['required']}
                    errorMessages={['This field is required.']}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Security />
                        </InputAdornment>),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>),
                    }}
                  />
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" type="submit">
              Login
              </Button>
              <div className="registration-container">
                <span>
                Do not have an account, Go to <Link to="/registration">Registration</Link>
                </span>
              </div>
            </CardActions>
          </Card>
        </ValidatorForm>
        {user.jwt && <Redirect to="/registration" />}
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { login })(Login);
