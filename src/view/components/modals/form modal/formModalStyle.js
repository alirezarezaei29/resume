const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    minWidth: 120,
    maxWidth: 300,
    margin: 8,
    '& .MuiInputLabel-formControl': {
      fontFamily: 'IRANSans',
      left: 'unset',
      right: 0,
    },
    '& .MuiSelect-icon': {
      right: 'unset',
      left: 0,
    },
    '& .MuiSelect-select.MuiSelect-select': {
      paddingRight: 12,
      fontFamily: 'IRANSans',
    },
  },
  headerModal: {
    '& .MuiTypography-h6': {
      fontFamily: 'IRANSans',
    },
    '& .MuiMenuItem-root': {
      fontFamily: 'IRANSans',
    },
    '& .MuiList-root': {
      fontFamily: 'IRANSans',
    },
  },
  inputGroup:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  liItem: {
    fontFamily: 'IRANSans',
    direction: 'rtl',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 24,
    paddingLeft: 24,
  },
  InputField: {
    marginRight: 8,
  },
  divInput: {
    margin: 8,
  },
  modalButton: {
    fontFamily: 'IRANSans',
    marginLeft: 8,
  },
  toast: {
    textAlign: 'center',
    fontFamily: 'IRANSans',
  },
  dropdownStyle: {
    marginTop: 8,
  },
};
export default styles;
