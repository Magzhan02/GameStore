import { combineReducers } from 'redux';

import cart from './cartReducer';
import favorite from './favoriteReducer';


const rootReducer = combineReducers({
    cart,
    favorite,
});

export default rootReducer;

