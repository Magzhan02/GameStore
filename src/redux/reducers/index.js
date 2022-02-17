import { combineReducers } from 'redux';

import cart from './cartReducer';
import favorite from './favoriteReducer';
import items from './itemsReducer'
import filter from './filterReducer';


const rootReducer = combineReducers({
    cart,
    favorite,
    items,
    filter,
});

export default rootReducer;

