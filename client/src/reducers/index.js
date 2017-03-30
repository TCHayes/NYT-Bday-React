import * as actions from '../actions/index';

const initialState = {
  currentDate: '19870218',
  rawData: [],
  currentUrl: '',
  error: null
}

export default (state=initialState, action) => {
  if (action.type === actions.FETCH_DATA_SUCCESS) {
    return {...state, rawData: action.data.response.docs, error: null};
  }
  if (action.type === actions.FETCH_FAILURE) {
    return {...state, error: action.error};
  }
  if (action.type === actions.SET_DATE) {
    return {...state, currentDate: action.date, error: null}
  }
  return state;
};
