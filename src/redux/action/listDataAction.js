const SHOW_LISTDATA = 'SHOW_LISTDATA '; // defining an action
// Action Creators
const showListData = (data) => {
  return ({type: SHOW_LISTDATA, data});
};

export {showListData};
