import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './resumeStyle';
import Introduce from '../../components/introduce/introduce';

function Resume() {
  return (
    <div id="main">
      <section id="introduce">
        <Introduce />
      </section>
      {/* <section id="about-me">
        <h2>chetori</h2>
      </section> */}
    </div>
  );
}


Resume.propTypes = {
};

export default withStyles(styles, { withTheme: true })(Resume);
