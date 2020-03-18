/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import EditIcon from '@material-ui/icons/Edit';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import styles from './ItemStyle';

function ItemComponent(props) {
  const {
    classes, permission, username, name,
  } = props;

  function handleClick(e, id) {
    e.preventDefault();
    const { onUserChange } = props;
    onUserChange(id);
  }

  let button;
  if (permission === 'write') {
    button = (
      <IconButton edge="end" aria-label="delete" onClick={(e) => handleClick(e, username)}>
        <EditIcon className={classes.editIcon} />
      </IconButton>
    );
  }
  return (
    <div>
      <ListItem dir="rtl" className={classes.root}>
        <ListItemText
          primary={name}
        />
        <ListItemText
          className={classes.userName}
          secondary={username}
        />
        <ListItemSecondaryAction className={classes.MuiListItemText}>
          {button}
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </div>

  );
}

ItemComponent.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  onUserChange: PropTypes.func.isRequired,
  permission: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};


export default withStyles(styles)(ItemComponent);
