import React from 'react';
import './App.scss';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HighlightIcon from '@material-ui/icons/Highlight';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './login/Login';
import Registration from './registration/Registration';

const App = () => {
  const registrationLink = props => <NavLink to="/registration" activeClassName="active" {...props} />;
  const loginLink = props => <NavLink to="/login" activeClassName="active" {...props} />;

  return (
    <Router>
      <div className="p-2">
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
            </div>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
