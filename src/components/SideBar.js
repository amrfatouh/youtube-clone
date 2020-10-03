import {
	faClock,
	faFire,
	faHistory,
	faHome,
	faPhotoVideo,
	faPlayCircle,
	faShippingFast,
	faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/SideBar.css";
import SideBarItem from "./SideBarItem";

function SideBar() {
	return (
		<div className="sidebar">
			<SideBarItem selected title="Home" Icon={<FontAwesomeIcon icon={faHome} />} />
			<SideBarItem title="Trending" Icon={<FontAwesomeIcon icon={faFire} />} />
			<SideBarItem title="Subscriptions" Icon={<FontAwesomeIcon icon={faShippingFast} />} />
			<hr />
			<SideBarItem title="Library" Icon={<FontAwesomeIcon icon={faPhotoVideo} />} />
			<SideBarItem title="History" Icon={<FontAwesomeIcon icon={faHistory} />} />
			<SideBarItem title="Your Videos" Icon={<FontAwesomeIcon icon={faPlayCircle} />} />
			<SideBarItem title="Watch Later" Icon={<FontAwesomeIcon icon={faClock} />} />
			<SideBarItem title="Liked Videos" Icon={<FontAwesomeIcon icon={faThumbsUp} />} />
		</div>
	);
}

export default SideBar;
