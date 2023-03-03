import { createStore, combineReducers } from 'redux';
import { DrawerReducer } from './DrawerReducer';

const reducer = combineReducers({
    DrawerReducer : DrawerReducer
})

const store = createStore(reducer);

export default store;