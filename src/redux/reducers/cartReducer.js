const SET_TO_CART = "SET_TO_CART";

const initialState = {
    items: []
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case SET_TO_CART: {
            return {
                ...state,
                items: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default cart;