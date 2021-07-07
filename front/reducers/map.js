import produce from '../util/produce';

export const initialState = {
  panTo: null,
  currentNumber: null,
};

export const SET_PANTO = 'SET_PANTO';
export const SET_CURRENT_NUMBER = 'SET_CURRENT_NUMBER';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case SET_PANTO:
      draft.panTo = action.data;
      break;
    case SET_CURRENT_NUMBER:
      draft.currentNumber = action.data;
      break;
    default:
      break;
  }
});

export default reducer;
