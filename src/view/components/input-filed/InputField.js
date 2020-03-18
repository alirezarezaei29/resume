import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './inputStyle';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { onInputChange } = this.props;
    onInputChange(event.target);
  }

  render() {
    const {
      input, name, label, type, classes, // isRequired
    } = this.props;

    return (
      <TextField
        className={classes.root}
        id={name}
        label={label}
        value={input}
        onChange={this.handleChange}
        type={type}
        name={name}
      />
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(InputField);
