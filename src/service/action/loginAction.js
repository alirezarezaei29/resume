export const Types = {
  Login_ITEM: 'Login',
};

export const createLogin = (value) => (
  {
    type: Types.Login_ITEM,
    payload: value,
  }
);
