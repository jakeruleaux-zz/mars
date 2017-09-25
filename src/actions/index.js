import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export const nextPhoto = (photoId) => ({
  type: types.NEXT_PHOTO,
  photoId
});

export const restartSearch = (photoId) => ({
  type: types.RESTART_SEARCH,
  photoId
});

export const selectPhoto = (photoId) => ({
  type: types.SELECT_PHOTO,
  photoId
});

export function fetchPhotoId(date) {
  return function (dispatch) {
    const localPhotoId = v4();
    let photoForImage;
    dispatch(requestDate(date, localPhotoId));
    // date = date.replace(" ", "_");
    return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&api_key=zICJa2foFUvdGR6lf93MIywcuMDCN3cwNXeYZ8Xd").then(
      response => response.json(),
      error => console.log("An error occured.", error)
    ).then(function(json) {
      console.log("hello");
      console.log(json.photos[0].img_src)
      photoForImage = json.photos[0].img_src;
      console.log(photoForImage);
      if (json.photos[0] > 0) {
        let photo = json.photos[0].img_src;
        } else {
        console.log("We couldn't locate a photo under that ID!");
      }
    });
  };
}

export const requestDate = (date, localPhotoId) => ({
  type: types.SELECT_PHOTO,
  date,
  localPhotoId: localPhotoId
});
