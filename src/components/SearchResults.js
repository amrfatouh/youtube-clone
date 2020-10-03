import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/SearchResults.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import CPAvatar from "../images/cp-avatar.jpg";
import CPThumbnail from "../images/thumbnails/thumbnail-2.webp";
import { useParams } from "react-router-dom";

function SearchResults() {
  const { searchTerm } = useParams();

  return (
    <div className="search-results">
      <div className="filter">
        <FontAwesomeIcon icon={faFilter} className="filter-icon" /> FILTER
      </div>
      <hr />
      <ChannelRow
        image={CPAvatar}
        title="Clever Programmer"
        verified
        subscribers="797K subscribers"
        videos="457 videos"
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      />
      <hr />
      <h3>Latest from '{searchTerm}'</h3>
      <VideoRow
        image={CPThumbnail}
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        channel="Clever Programmer"
        verified
        views="102K views"
        date="Streamed 2 months ago"
        description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
        length="3:43:01"
      />

      <VideoRow
        image={CPThumbnail}
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        channel="Clever Programmer"
        verified
        views="102K views"
        date="Streamed 2 months ago"
        description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
        length="3:43:01"
      />

      <VideoRow
        image={CPThumbnail}
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        channel="Clever Programmer"
        verified
        views="102K views"
        date="Streamed 2 months ago"
        description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
        length="3:43:01"
      />

      <VideoRow
        image={CPThumbnail}
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        channel="Clever Programmer"
        verified
        views="102K views"
        date="Streamed 2 months ago"
        description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
        length="3:43:01"
      />

      <VideoRow
        image={CPThumbnail}
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        channel="Clever Programmer"
        verified
        views="102K views"
        date="Streamed 2 months ago"
        description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
        length="3:43:01"
      />
    </div>
  );
}

export default SearchResults;
