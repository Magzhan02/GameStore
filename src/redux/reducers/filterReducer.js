const initialState = {
  sortBy: {
    type: 'popular',
    order: 'desc',
  }
};

const filter = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  return state;
};

export const setFilterAC = (obj) => ({
  type: 'SET_SORT_BY',
  payload: obj

});

export default filter;