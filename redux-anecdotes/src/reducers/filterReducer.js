const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'SET_FILTER':
      return payload;
    default:
      return state;
  }
};

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    payload: filter,
  };
};

export default filterReducer;
