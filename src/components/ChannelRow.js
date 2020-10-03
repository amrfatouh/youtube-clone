import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/ChannelRow.css";

function ChannelRow({ image, title, verified, subscribers, videos, description }) {
	return (
		<div className="channel-row">
			<img src={image} alt={title} className="channel-image" />
			<div className="text">
				<h4>
					{title} {verified && <FontAwesomeIcon icon={faCheckCircle} />}
				</h4>
				<div className="secondary-text">
					<div>
						{subscribers} • {videos}
					</div>
					<div>{description}</div>
				</div>
			</div>
			<button>SUBSCRIBE</button>
		</div>
	);
}

export default ChannelRow;
