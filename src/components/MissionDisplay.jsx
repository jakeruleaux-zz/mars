import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectPhoto } from "./../actions";

const MissionDisplay = ({ dispatch, date }) => {
  const { photoArray, arrayPosition, photoId } = date;
  console.log("turd");
  console.log(date);
  return (
    <div>
      <div>
        <h1>{date}</h1>
        <hr/>
        <h4>{photo}</h4>
      </div>
      <div className = {phase} onClick={e => {
        e.preventDefault();
        if(!(arrayPosition === photoArray.length - 1)) {
          dispatch(nextPhoto(photoId));
        } else {
          dispatch(restartSearch(photoId));
        }
      }}>
        <h1>
          {currentPhrase}
        </h1>
      </div>
    </div>
  );
};

MissionDisplay.propTypes = {
  date: PropTypes.object,
  arrayPosition: PropTypes.number,
  photoArray: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  let info;
  const date = state.photosById[state.selectedPhoto];
  if (!state.photosById[state.selectedPhoto].isFetching) {
    info = {
      photoId: state.selectedPhoto,
      date: state.photosById[state.selectedPhoto].date,
      photoArray: state.photosById[state.selectedPhoto].photoArray,
      arrayPosition: state.photosById[state.selectedPhoto].arrayPosition
    };
  } else {
    info = {
      date: "",
      photoArray: "",
      arrayPosition: ""
    };
  }
  return {
    date: info
  };
};


export default connect(
  mapStateToProps) (MissionDisplay);
