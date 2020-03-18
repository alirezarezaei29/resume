/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import styles from './headerStyle';
import history from '../../../service/router/history';

function HeaderComponent(props) {
  const {
    classes, location,
  } = props;
  function logOut(e) {
    e.preventDefault();
    localStorage.setItem('user_info', '');
    history.push('/');
    window.location.reload();
  }
  let exitIcon;
  if (location.pathname !== '/') {
    exitIcon = (
      <IconButton edge="end" aria-label="delete" onClick={(e) => logOut(e)}>
        <ExitToAppIcon className={classes.exitIcon} />
      </IconButton>
    );
  }
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography className={classes.header} variant="h6" noWrap>
            فرزندم
          </Typography>
          {exitIcon}
        </Toolbar>
      </AppBar>
    </div>

  );
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};


export default withRouter(withStyles(styles)(HeaderComponent));
