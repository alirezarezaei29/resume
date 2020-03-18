import { connect } from 'react-redux';
import { createLogin } from '../../../service/action/loginAction';
import Login from './login';

const mapDispatchToProps = (dispatch) => ({
  createLogin: (response) => dispatch(createLogin(response)),
});

const mapStateToProps = (state) => ({
  logged_in: state.login.logged_in,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
