const SET_TO_CART = "SET_TO_CART";
const REMOVE_ITEM = "REMOVE_ITEM";

const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
};
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);


const cart = (state = initialState, action) => {
    switch (action.type) {
        case SET_TO_CART: {
            const current = !state.items[0] ? [action.payload] : [...state.items[0].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: current,
                    totalPrice: getTotalPrice(current)
                },
            };

            const items = Object.values(newItems).map(obj => obj.items);
            const arrTotalPrice = [].concat.apply([], items)
            const totalPrice = getTotalPrice(arrTotalPrice)

            return {
                ...state,
                items: newItems,
                totalPrice: totalPrice,
                totalCount: items.length,
            };
        };

        case REMOVE_ITEM: {
            const newItems = {...state.items};
            const currentTotalPrice = newItems[action.payload].totalPrice;
            delete newItems[action.payload];
            const items = Object.values(newItems).map(obj => obj.items);
             return {
                 ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: items.length
             };
        };

        default: {
            return state
        };
    };
};


export const setToCartAC = (obj) => ({
    type: SET_TO_CART,
    payload: obj
});

export const removeItemAC = (id) =>({
    type: REMOVE_ITEM,
    payload: id
})


export default cart;