/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CallLogo from './call';
import Gmail from './gmail';
import './introduce.css';
import styles from './introduceStyle';


function Introduce(props) {
  const { classes } = props;
  return (
    <div id="main" className={classes.root}>
      <div className={classes.card}>
        <div className={classes.content}>
          <p className={classes.hello}>hello</p>
          <p className={classes.name}>
            I'm  Ali Reza Rezaei

          </p>
          <p className={classes.developer}>
            Front End Developer
          </p>
          <div className={classes.contact}>
            <CallLogo />
            <p className={classes.info}>+98 939 596 6186</p>

          </div>
          <div className={classes.contactMail}>
            <Gmail />
            <p className={classes.info}>rezaei.alireza.ce@gmail.com</p>
          </div>
          <div>
            <ul>
              <li><a href="www.varzesh3.com"><i className="fa fa-paper-plane" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-gitlab" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
            </ul>
          </div>

        </div>
        <div className={classes.image}>
          <img className={classes.photo} src="images/me.png" alt="myPix" />
        </div>

      </div>
    </div>
  );
}


Introduce.propTypes = {
  classes: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Introduce);
