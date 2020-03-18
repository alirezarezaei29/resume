/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Pagination from '@material-ui/lab/Pagination';
import Loading from '../../components/loading/loading';
import styles from './managerStyle';
import ManagerApi from '../../../service/api/managerApi';
import ItemManager from '../../components/list-item/Item';
import FormModal from '../../components/modals/form modal/formModal';

toast.configure({ autoClose: 2000, position: toast.POSITION.TOP_RIGHT });

class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      permission: '',
      userInfo: {},
      addUser: {},
      open: false,
      type: '',
      openAddModal: false,
      page: 1,
    };

    this.getManagerList = this.getManagerList.bind(this);
    this.setPermission = this.setPermission.bind(this);
    this.editUser = this.editUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeAddModal = this.closeAddModal.bind(this);
    this.successMessage = this.successMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getManagerList(1);
    this.setPermission();
  }


  setPermission() {
    const retrievedObject = localStorage.getItem('user_info');
    const info = JSON.parse(retrievedObject);
    this.setState({
      permission: info.permissions.admin,
    });
  }

  async getManagerList(pageNumber) {
    const { getManager, history, classes } = this.props;
    await ManagerApi.getManagers(pageNumber).then((response) => {
      getManager(response);
      this.setState({ loading: false });
    })
      .catch((error) => {
        if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
          toast.error(<div className={classes.toast}>اشکالی در ارتباط با سرور</div>);
          this.setState({ loading: false });
        } else {
          getManager(error.response);
          this.setState({ loading: false });
          history.push('/');
        }
      });
  }

  handleChange(event, value) {
    this.setState({ page: value, loading: true });
    this.getManagerList(value);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ openAddModal: true, type: 'add' });
  }

  async editUser(name) {
    const { classes, history } = this.props;
    this.setState({ loading: true });
    await ManagerApi.getOne(name).then((response) => {
      this.setState({
        loading: false, open: true, userInfo: response.data, type: 'edit',
      });
    })
      .catch((error) => {
        if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
          toast.error(<div className={classes.toast}>اشکالی در ارتباط با سرور</div>);
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false });
          history.push('/');
        }
      });
  }

  closeModal(needReload) {
    this.setState({ open: false });
    if (needReload) {
      window.location.reload();
    }
  }

  closeAddModal(needReload) {
    this.setState({ openAddModal: false });
    if (needReload) {
      window.location.reload();
    }
  }

  successMessage(message) {
    const { classes } = this.props;
    toast.success(<div className={classes.toast}>{message}</div>);
  }

  render() {
    const { classes, managers, meta } = this.props;
    const {
      permission, open, userInfo, openAddModal, type, addUser, loading, page,
    } = this.state;
    const list = managers.map((item) => (
      <ItemManager
        key={item.username}
        onUserChange={this.editUser}
        name={item.name}
        username={item.username}
        permission={permission}
      />
    ));

    let button;
    if (permission === 'write') {
      button = (
        <IconButton edge="end" aria-label="add" onClick={(e) => this.handleClick(e)}>
          <PersonAddIcon className={classes.adminIcon} />
        </IconButton>
      );
    }

    if (loading) return <Loading />;
    return (
      <Box className={classes.theme} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <List className={classes.root}>
          {button}
          {list}
          <Pagination
            color="primary"
            className={classes.paginate}
            count={meta.pages}
            page={page}
            onChange={this.handleChange}
          />
        </List>
        <FormModal open={open} type={type} userInfo={userInfo} handleClose={this.closeModal} successMessage={this.successMessage} headerModal="تغییر اطلاعات: " />
        <FormModal open={openAddModal} userInfo={addUser} type={type} handleClose={this.closeAddModal} successMessage={this.successMessage} headerModal="اضافه کردن ادمین" />
      </Box>
    );
  }
}

Manager.propTypes = {
  getManager: PropTypes.func.isRequired,
  managers: PropTypes.array,
  meta: PropTypes.object,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Manager);
