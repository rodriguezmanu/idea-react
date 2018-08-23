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
} from '@material-ui/core/';
import './FormAuth.scss';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PropTypes from 'prop-types';
import SubmitButton from '../submitButton/SubmitButton';

class FormAuth extends React.PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
    showPassword: false,
  };

  componentDidMount() {
    this.state = {
      name: '',
      email: '',
      password: '',
      showPassword: false,
    };
  }

  /**
   * Handler change form
   */
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  /**
   * Toggle showPassword
   */
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const {
      showPassword, password, email, name,
    } = this.state;
    const {
      user, type, title, submitCallback,
    } = this.props;

    return (
      <div className="login-component">
        <ValidatorForm
          onSubmit={submitCallback}
        >
          <Card className="card-component">
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {title}
              </Typography>
              <div>
                {
                  type === 'registration'
                  && (
                  <TextValidator
                    label="Name"
                    margin="dense"
                    fullWidth
                    name="name"
                    type="text"
                    onChange={this.handleChange}
                    value={name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    validators={['required']}
                    errorMessages={['This field is required.']}
                  />
                  )
                }

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
              <SubmitButton label={title} isFetching={user.isFetching} />
              <div className="registration-container">
                {
                  type === 'login' && (
                  <span>
                    Do not have an account, Go to <Link to="/registration">Registration</Link>
                  </span>
                  )
                }
                {
                  type === 'registration' && (
                  <span>
                    if you have an account, Go to <Link to="/login">login</Link>
                  </span>
                  )
                }
              </div>
            </CardActions>
          </Card>
        </ValidatorForm>
      </div>
    );
  }
}

FormAuth.propTypes = {
  user: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  submitCallback: PropTypes.func.isRequired,
};

export default FormAuth;
