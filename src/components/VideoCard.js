import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/VideoCard.css";

function VideoCard({ title, channel, verified, channelAvatar, views, date, length, image }) {
	return (
		<div className="video-card">
			<div className="main-image-div">
				<img src={image} alt={title} className="main-image" />
				<span className="video-length">{length}</span>
			</div>
			<div className="below-image">
				<img src={channelAvatar} alt={channel} className="channel-avatar" />
				<div className="card-text">
					<h3>{title}</h3>
					<div className="secondary-text">
						<div>
							{channel} {verified && <FontAwesomeIcon icon={faCheckCircle} />}
						</div>
						<div>
							{views} • {date}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
