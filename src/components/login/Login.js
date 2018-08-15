import React from 'react';
import {
  Visibility, VisibilityOff, AccountCircle, Security,
} from '@material-ui/icons/';
import {
  Typography,
  IconButton,
  InputAdornment,
  TextField,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core/';
import './Login.scss';
import { Link } from 'react-router-dom';

export default class Login extends React.PureComponent {
  state = {
    email: '',
    password: '',
    showPassword: false,
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { showPassword, password, email } = this.state;

    return (
      <div className="login-component">
        <Card className="card-component">
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
             Login
            </Typography>
            <div>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                margin="dense"
                name="email"
                value={email}
                autoComplete="email"
                className="p-2"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />

              <div>
                <TextField
                  fullWidth
                  label="Password"
                  id="password"
                  margin="dense"
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  name="password"
                  autoComplete="password"
                  className="p-2"
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
            <Button variant="contained" color="primary">
              Login
            </Button>
            <div className="registration-container">
              <span>
                Do not have an account, Go to <Link to="/registration">Registration</Link>
              </span>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
