/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircleLoader from 'react-spinners/CircleLoader';
import styles from './loadingStyle';


class Loading extends React.Component {
  //  constructor(props) {
  //    super(props);
  //    this.state = {
  //     loading: true
  //   };
  //  }

  render() {
    // const {
    //   input, name, label, type, classes, // isRequired
    // } = this.props;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CircleLoader
          size={100}
          color="#123abc"
        />
      </div>
    );
  }
}

Loading.propTypes = {
//   name: PropTypes.string.isRequired,
//   input: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
//   // isRequired: PropTypes.bool.isRequired,
};


export default withStyles(styles)(Loading);
