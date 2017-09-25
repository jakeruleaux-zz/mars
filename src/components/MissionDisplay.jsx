import React from "react";
import styles from "./../styles/SongDisplay.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { } from "./../actions";

const MissionDisplay = ({ dispatch, date }) => {
  const { earth_date, camera, currentPhrase, photoArray, arrayPosition, photoId } = date;
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
