import React from 'react';
import './App.scss';
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core/';
import HighlightIcon from '@material-ui/icons/Highlight';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './login/Login';
import Registration from './registration/Registration';
import { logout } from '../actions/user.actions';


const App = ({ logout, user }) => {
  const registrationLink = props => <NavLink to="/registration" activeClassName="active" {...props} />;
  const loginLink = props => <NavLink to="/login" activeClassName="active" {...props} />;

  return (
    <Router>
      <div className="main-container d-flex flex-column p-2">
        <div className="header-container">
          <AppBar position="static">
            <Toolbar className="d-flex justify-content-between">
              <div className="d-flex">
                <Avatar>
                  <HighlightIcon />
                </Avatar>
                <Typography variant="title" color="inherit" className="pl-2 align-self-center">
              Idea App
                </Typography>
              </div>
              <div>
                <Button color="inherit" component={loginLink}>
                  Login
                </Button>
                <Button color="inherit" component={registrationLink}>
                  Registration
                </Button>
                <Button color="inherit" onClick={() => { logout(user.refresh_token); }}>
                  Logout
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div className="page-container d-flex align-items-center justify-content-center h-100">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Redirect to="/login" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, { logout })(App);
