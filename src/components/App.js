import React from 'react';
import './App.scss';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HighlightIcon from '@material-ui/icons/Highlight';

export const App = () => (
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
          <Button color="inherit">Login</Button>
          <Button color="inherit">Registration</Button>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

export default App;
