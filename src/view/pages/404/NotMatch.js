/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import animationData from './404.json';
import styles from './NotMatchStyle';


function NotMatch(props) {
  const {
    classes,
  } = props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  };
  return (
    <div className={classes.theme}>
      <div>
        <Lottie
          options={defaultOptions}
          width={600}
        />
      </div>

      <div className={classes.lostBox}>
        <p className={classes.text}>
          متاسفانه صفحه مورد نظر پیدا نشد !!
        </p>
      </div>
      <div className={classes.buttonBox}>
        <a className={classes.button} href="/">
          <span className={classes.first} />
          <span className={classes.second} />
          <span className={classes.third} />
          <span className={classes.fourth} />
          صفحه اصلی
        </a>
      </div>
    </div>
  );
}


NotMatch.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(NotMatch);
