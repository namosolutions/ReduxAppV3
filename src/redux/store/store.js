import {createStore, combineReducers} from 'redux';

const appReducer = combineReducers(require('../reducer').default);
const store = createStore(appReducer);

export default store;
