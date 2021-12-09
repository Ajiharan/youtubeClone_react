import React from "react";
import "./SearchPage.css";
import TuneSharpIcon from "@material-ui/icons/TuneSharp";
import { useParams } from "react-router-dom";
import ChannelRow from "../channel/ChannelRow";
import VideoRow from "../videos/VideoRow";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneSharpIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAryBRWiEwgWD2UyrnX9FNLFzKobA"
        channel="react"
        verified
        subs="270K"
        noOfVideos={250}
        description="start with react"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="250K"
        description="how to teach english"
        timestamp="20 seconds ago"
        channel="react"
        image="https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAryBRWiEwgWD2UyrnX9FNLFzKobA"
        title="lets start english"
      />
      <VideoRow
        views="1.4M"
        subs="250K"
        description="how to learn react js"
        timestamp="20 seconds ago"
        channel="react"
        image="https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAryBRWiEwgWD2UyrnX9FNLFzKobA"
        title="lets start react"
      />
      <VideoRow
        views="1.4M"
        subs="250K"
        description="how to learn react js"
        timestamp="20 seconds ago"
        channel="react"
        image="https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAryBRWiEwgWD2UyrnX9FNLFzKobA"
        title="lets start react"
      />
      <VideoRow
        views="1.4M"
        subs="250K"
        description="how to learn react js"
        timestamp="20 seconds ago"
        channel="react"
        image="https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAryBRWiEwgWD2UyrnX9FNLFzKobA"
        title="lets start react"
      />
      <VideoRow
        views="1.4M"
        subs="250K"
        description="how to learn react js"
        timestamp="20 seconds ago"
        channel="react"
        image="https://i.ytimg.com/vi/4UZrsTqkcW4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLAryBRWiEwgWD2UyrnX9FNLFzKobA"
        title="lets start react"
      />
    </div>
  );
};

export default SearchPage;
