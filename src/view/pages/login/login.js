/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Button from '../../components/button/Button';
import LoginApi from '../../../service/api/loginApi';
import InputField from '../../components/input-filed/InputField';
import styles from './loginStyle';
import Loading from '../../components/loading/loading';

toast.configure({ autoClose: 3000, position: toast.POSITION.TOP_RIGHT });

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async handleSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state;
    const { classes, createLogin, history } = this.props;
    if (username === '' || password === '') {
      toast.warn(<div className={classes.toast}>لطفا فیلد ها را پر کنید</div>);
      return;
    }
    this.setState({ loading: true });
    const loginData = {
      username,
      password,
    };
    await LoginApi.login(loginData).then((response) => {
      this.setState({ loading: false });
      createLogin(response);
      history.push('/managers');
    })
      .catch((error) => {
        if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
          toast.error(<div className={classes.toast}>اشکالی در ارتباط با سرور</div>);
        } else {
          createLogin(error.response);
          toast.error(<div className={classes.toast}>اطلاعات وارد شده صحیح نمی باشد</div>);
        }
        this.setState({ loading: false });
      });
  }

  handleChange(event) {
    const nameFiled = event.name;
    const val = event.value;
    this.setState({ [nameFiled]: val });
  }

  render() {
    const { classes } = this.props;
    const { username, password, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <Box className={classes.theme} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <form onSubmit={this.handleSubmit} className={classes.root} dir="rtl" noValidate autoComplete="off">
          <Box display="flex" flexDirection="column" alignItems="center" className={classes.box}>
            <img src="images/children-png-cartoon-8.png" className={classes.image} alt="child" />
            <InputField name="username" label="نام کاربری" onInputChange={this.handleChange} input={username} type="text" isRequired />
            <InputField name="password" label="رمز عبور" onInputChange={this.handleChange} input={password} type="password" isRequired />
            <Button type="submit" color="primary" value="Submit" name="ورود" />
          </Box>
        </form>
      </Box>
    );
  }
}

Login.propTypes = {
  createLogin: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Login);
