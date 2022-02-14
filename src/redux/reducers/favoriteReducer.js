const SET_TO_FAVORITES = "SET_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
const initialState = {
    items: [],
    totalCount: 0
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const favorite = (state = initialState, action) => {
    switch (action.type) {
        case SET_TO_FAVORITES: {
            const current = !state.items[0] ? [action.payload] : [...state.items[0].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: current,
                    totalPrice: getTotalPrice(current)
                },
            };

            const items = Object.values(newItems).map(obj => obj.items);

            return {
                ...state,
                items: newItems,
                totalCount: items.length
            };
        };

    case REMOVE_FROM_FAVORITES: {
        const newItems = {
            ...state.items
        };
        delete newItems[action.payload];
        const items = Object.values(newItems).map(obj => obj.items);

        return {
            ...state,
            items: newItems,
            totalCount: items.length
        };
    };

    default: {
        return state
    };
    };
};


export const setToFavorAC = (obj) => ({
    type: SET_TO_FAVORITES,
    payload: obj
});

export const removeFromFavorAC = (id) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: id
});

export default favorite;