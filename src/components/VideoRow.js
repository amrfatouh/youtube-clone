import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/VideoRow.css";

function VideoRow({ image, title, channel, verified, views, date, description, length }) {
  return (
    <div className="video-row">
      <div className="main-image-div">
        <img src={image} alt={title} className="main-image" />
        <div className="length">{length}</div>
      </div>
      <div className="text">
        <h4>{title}</h4>
        <div className="secondary-text">
          <div>
            {channel} {verified && <FontAwesomeIcon icon={faCheckCircle} />} {views} . {date}
          </div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default VideoRow;
