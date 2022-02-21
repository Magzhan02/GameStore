const initialState = {
    email: null,
    token: null,
    id: null,
    name: 'user'
};

const register = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER': {
            return {
                ...state,
                email: action.payload.email,
                token: action.payload.token,
                id: action.payload.id,
            }
        }

        case 'REMOVE_USER': {
            return {
                ...state,
                email: null,
                token: null,
                id: null,
            }
        }
        case 'SET_USER_NAME':{
            return {
                ...state,
                name:action.payload
            }
        }
        default: {
            return state
        }
    }
}

export const setUserAC = (obj) =>({
    type:'SET_USER',
    payload: obj
});

export const removeUserAC = () =>({
    type:'REMOVE_USER'
});

export const setUserNameAC = (value) =>({
    type:'SET_USER_NAME',
    payload:value
});

export default register;