import { combineReducers } from 'redux';

import cart from './cartReducer';
import favorite from './favoriteReducer';
import items from './itemsReducer'
import filter from './filterReducer';
import register from './registerReducer';

const rootReducer = combineReducers({
    cart,
    favorite,
    items,
    filter,
    register
});

export default rootReducer;

