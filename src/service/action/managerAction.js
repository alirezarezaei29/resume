export const Types = {
  GET_MANAGER: 'GET_MANAGER',
};

export const getManager = (value) => (
  {
    type: Types.GET_MANAGER,
    payload: value,
  }
);
