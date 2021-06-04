import produce from 'immer';

export const initialState = {
  currentLocation: null,
  setCurrentLocationLoading: false,
  setCurrentLocationDone: false,
  setCurrentLocationError: null,
};

export const SET_CURRENTLOCATION_REQUEST = 'SET_CURRENTLOCATION_REQUEST';
export const SET_CURRENTLOCATION_SUCCESS = 'SET_CURRENTLOCATION_SUCCESS';
export const SET_CURRENTLOCATION_FAILURE = 'SET_CURRENTLOCATION_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case SET_CURRENTLOCATION_REQUEST:
      draft.setCurrentLocationLoading = true;
      draft.setCurrentLocationDone = false;
      draft.setCurrentLocationError = null;
      break;
    case SET_CURRENTLOCATION_SUCCESS:
      draft.setCurrentLocationLoading = false;
      draft.setCurrentLocationDone = true;
      const changeData = action.data;
      eval(`changeData = ${changeData}`);
      draft.currentLocation = changeData.location;
      break;
    case SET_CURRENTLOCATION_FAILURE:
      draft.setCurrentLocationLoading = false;
      draft.setCurrentLocationError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;
