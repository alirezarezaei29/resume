/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './buttonStyle';

function ButtonComponent(props) {
  const {
    classes, type, color, name,
  } = props;
  return (
    <Button
      className={classes.root}
      id={type}
      color={color}
      type={type}
      variant="contained"
    >
      {name}
    </Button>

  );
}

ButtonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
};


export default withStyles(styles)(ButtonComponent);
