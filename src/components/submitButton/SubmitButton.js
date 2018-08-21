import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core/';
import PropTypes from 'prop-types';

const SubmitButton = ({ label, loadingLabel, isFetching }) => (
  <div>
    <Button variant="contained" color="primary" type="submit" disabled={isFetching}>
      {isFetching ? loadingLabel : label}
      {isFetching && <CircularProgress size={20} color="primary" />}
    </Button>
  </div>
);

SubmitButton.defaultProps = {
  loadingLabel: 'Loading',
  isFetching: false,
};

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  loadingLabel: PropTypes.string,
  isFetching: PropTypes.bool,
};

export default SubmitButton;
