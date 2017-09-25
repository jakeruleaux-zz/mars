import constants from "./../constants";
const { defaultState, types } = constants;

const photosById = (state = defaultState.photosById, action) => {
  let date;
  let newDate;
  let newState;
  switch (action.type) {
    case types.NEXT_PHOTO:
      date = state[action.photoId];
      const newPosition = date.arrayPosition + 1;
      newDate = Object.assign({}, date, {
        arrayPosition: newPosition
      });
      newState = Object.assign({}, state, {
        [action.photoId]: newDate
      });

      return newState;

      case types.RECEIVE_PHOTO:
        date = state[action.photoId];
        newDate = Object.assign({}, date, {
          isFetching: false,
          receivedAt: action.receivedAt,
          date: action.date,
          photoArray: action.photoArray,
          arrayPosition: 0,
          photoId: action.photoId
        });
        newState = Object.assign({}, state, {
          [action.photoId]: newDate
        });
        return newState;
  }
};

export default photosById;
