import axios from 'axios';

const SET_ITEM_TO_STATE = "SET_ITEM_TO_STATE";

const initialState = {
    items: [],
};

const items = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEM_TO_STATE: {
            return {
                ...state,
                items: action.payload
            }
        };
    default:
        return state;
    }
}

export const setItemsAC = (items) => ({
    type: 'SET_ITEM_TO_STATE',
    payload: items
});

export const fetchItems = (sortBy) => (dispatch) => {
    axios.get(`http://localhost:3001/items?_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then((res) => {
            dispatch(setItemsAC(res.data));
        });
};


export default items;