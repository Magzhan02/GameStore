import { combineReducers } from 'redux';

import cart from './cartReducer';
import favorite from './favoriteReducer';
import items from './itemsReducer'


const rootReducer = combineReducers({
    cart,
    favorite,
    items,
});

export default rootReducer;

