import constants from "./../constants";
const { defaultState, types } = constants;

const selectedPhoto = (state = defaultState.selectedPhto, action) => {
  let newState;
  let selectedPhto;
  switch (action.type) {
    case types.SELECT_PHOTO:
      newState = Object.assign({}, state, {
        selectedPhoto: action.photoId
      });
      selectedPhoto = action.photoId;
      return selectedPhoto;
    default:
      return state;
  }
};

export default selectedPhoto;
