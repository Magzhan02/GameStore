const SET_TO_FAVORITE = "SET_TO_FAVORITE";

const initialState = {
    items: []
};

const favorite = (state = initialState, action) => {
    switch (action.type) {
        case SET_TO_FAVORITE: {
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

export default favorite;