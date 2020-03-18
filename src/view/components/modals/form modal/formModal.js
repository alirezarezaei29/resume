/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { toast } from 'react-toastify';
import InputField from '../../input-filed/InputField';
import ModalApi from '../../../../service/api/modalApi';
import 'react-toastify/dist/ReactToastify.css';
import styles from './formModalStyle';

toast.configure({ autoClose: 3000, position: toast.POSITION.TOP_RIGHT });

// eslint-disable-next-line react/prefer-stateless-function
class formModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      permissionsLabel: [
        {
          name: 'admin',
          label: 'ادمین',
        },
        {
          name: 'child',
          label: 'فرزند',
        },
        {
          name: 'group',
          label: 'گروه',
        },
        {
          name: 'supporter',
          label: 'حمایت کننده',
        },
        {
          name: 'support',
          label: 'حمایت',
        },
        {
          name: 'expense',
          label: 'هزینه',
        },
        {
          name: 'upload',
          label: 'آپلود',
        },
        {
          name: 'post',
          label: 'ارسال',
        },
        {
          name: 'payment',
          label: 'پرداخت',
        },
        {
          name: 'receipt_create',
          label: 'دریافت رسید',
        },
        {
          name: 'receipt_edit',
          label: 'ویرایش رسید',
        },
        {
          name: 'publish',
          label: 'انتشار',
        },
      ],
      userField: {
        name: '',
        phone_number: '',
        username: '',
        password: '',
        permissions: {
          admin: '',
          child: '',
          group: '',
          supporter: '',
          support: '',
          expense: '',
          upload: '',
          post: '',
          payment: '',
          receipt_create: '',
          receipt_edit: '',
          publish: '',
        },
        notifications: ['new_request', 'new_payment'],
      },
      needReload: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDropChange = this.handleDropChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const { userInfo, type } = this.props;
    if (type === 'edit') {
      const { userField } = this.state;
      const obj = { ...userField, ...userInfo };
      this.setState({ userField: obj, name: userInfo.name });
    }
  }

  handleChange(event) {
    const nameFiled = event.name;
    const val = event.value;
    this.setState((prevState) => {
      const userField = { ...prevState.userField };
      userField[nameFiled] = val;
      return { userField };
    });
  }

  handleDropChange(event) {
    const nameFiled = event.target.name;
    const val = event.target.value;
    this.setState((prevState) => {
      const userField = { ...prevState.userField };
      userField.permissions[nameFiled] = val;
      return { userField };
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { userField, permissionsLabel } = this.state;
    const { type, classes, successMessage } = this.props;
    if (userField.name === '' || userField.password === '' || userField.username === '') {
      toast.error(<div className={classes.toast}>فیلد های * را پر کنید</div>);
      return;
    }
    if ((!(/^09[0-9]{9}$/.test(userField.phone_number))) && (userField.phone_number !== '')) {
      toast.error(<div className={classes.toast}>شماره تلفن وارد شده صحیح نمی باشد</div>);
      return;
    }
    if (!(/[A-Za-z1-9]{5,}$/.test(userField.password))) {
      toast.error(<div className={classes.toast}>رمز عبور حداقل 5 کاراکتر، حروف و عددی انگلیسی باید باشد</div>);
      return;
    }
    for (const i in permissionsLabel) {
      const namePermission = permissionsLabel[i].name;
      if (userField.permissions[namePermission] === '') {
        delete userField.permissions[namePermission];
      }
    }
    await ModalApi.eaManagers(userField, type).then((response) => {
      this.setState({ needReload: true });
      if (response.statusText === 'OK') {
        successMessage('تغییرات با موفقیت انجام شد');
      } else {
        successMessage('ادمین با موفقیت اضافه شد');
      }
    })
      .catch((error) => {
        if (error.message === 'Network Error' || error.code === 'ECONNABORTED') {
          toast.error(<div className={classes.toast}>اشکالی در ارتباط با سرور</div>);
        } else {
          toast.error(<div className={classes.toast}>اطلاعات وارد شده صحیح نمی باشد</div>);
        }
      });
  }

  closeModal() {
    const { handleClose } = this.props;
    const { needReload } = this.state;
    handleClose(needReload);
  }

  render() {
    const {
      classes, open, headerModal, type,
    } = this.props;
    const { userField, permissionsLabel, name } = this.state;
    let textButton;
    let username;

    if (type === 'add') {
      textButton = 'اضافه';
      username = (
        <div className={classes.divInput}>
          <InputField className={classes.inputField} name="username" label="نام کاربری*" onInputChange={this.handleChange} input={userField.username} type="text" isRequired />
        </div>
      );
    } else {
      textButton = 'تغییر';
    }
    const dropdown = permissionsLabel.map((item) => (
      <FormControl className={classes.formControl} key={item.name}>
        <InputLabel id="demo-simple-select-helper-label">{item.label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={userField.permissions[item.name]}
          name={item.name}
          onChange={this.handleDropChange}
        >
          <MenuItem value="" className={classes.liItem}>
            <em>هیچکدام</em>
          </MenuItem>
          <MenuItem value="write" className={classes.liItem}>نوشتن</MenuItem>
          <MenuItem value="read" className={classes.liItem}>خواندن</MenuItem>
        </Select>
      </FormControl>
    ));

    return (
      <div>
        <Dialog open={open} onClose={this.closeModal} aria-labelledby="form-dialog-title" className={classes.root} dir="rtl">
          <DialogTitle id="form-dialog-title" className={classes.headerModal}>
            {headerModal}
            {' '}
            {name}
          </DialogTitle>
          <form onSubmit={this.handleSubmit} dir="rtl" className={classes.form} noValidate autoComplete="off">
            <div className={classes.inputGroup}>
              <div className={classes.divInput}>
                <InputField className={classes.inputField} name="name" label="نام*" onInputChange={this.handleChange} input={userField.name} type="text" isRequired />
              </div>
              {username}
              <div className={classes.divInput}>
                <InputField className={classes.inputField} name="password" label="رمز عبور*" onInputChange={this.handleChange} input={userField.password} type="password" isRequired />
              </div>
              <div className={classes.divInput}>
                <InputField className={classes.inputField} name="phone_number" label="شماره تماس" onInputChange={this.handleChange} input={userField.phone_number} type="text" isRequired />
              </div>
            </div>
            <div className={classes.dropdownStyle}>
              {dropdown}
            </div>
            <DialogActions>
              <Button className={classes.modalButton} variant="contained" type="submit" color="primary" value="Submit">
                {textButton}
              </Button>
              <Button className={classes.modalButton} variant="contained" onClick={this.closeModal} color="secondary">
                بازگشت
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>

    );
  }
}

formModalComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  headerModal: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  successMessage: PropTypes.func.isRequired,
};


export default withStyles(styles)(formModalComponent);
