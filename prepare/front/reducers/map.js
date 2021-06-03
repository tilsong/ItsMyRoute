import produce from 'immer';

export const initialState = {
  currentLoction: { lat: '20', lng: '20' },
};

export const SET_CURRENTLOCATION = 'SET_CURRENTLOCATION';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case SET_CURRENTLOCATION:
      draft.currentLoction = action.data;
      break;
    default:
      break;
  }
});

export default reducer;
