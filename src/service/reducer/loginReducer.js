import { Types } from '../action/loginAction';

const InitialState = {
  logged_in: false,
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case Types.Login_ITEM:
      if (action.payload.status === 200) {
        const information = {
          secret_key: action.payload.data.secret_key,
          name: action.payload.data.name,
          permissions: action.payload.data.permissions,
        };
        localStorage.setItem('user_info', JSON.stringify(information));
        return { ...state, logged_in: true };
      }
      return { ...state, logged_in: false };


    default:
      return state;
  }
};
