import { Types } from '../action/managerAction';

const InitialState = {
  managers: [],
  meta: {},
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case Types.GET_MANAGER:
      if (action.payload.status === 200) {
        return { ...state, managers: action.payload.data.list, meta: action.payload.data.meta };
      }
      return { ...state, managers: [], meta: {} };

    default:
      return state;
  }
};
