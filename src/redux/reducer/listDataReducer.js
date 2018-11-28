import {initialState} from '../initialState';
const SHOW_LISTDATA = 'SHOW_LISTDATA ';

export default(state = initialState, action) => {
  switch (action.type) {
  case SHOW_LISTDATA:
    return Object.assign({}, {listId: action.data});
  default:
    return state;
  }
};
