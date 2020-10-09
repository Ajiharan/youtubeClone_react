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
      image="https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.0-0/p370x247/120765165_2521823038108061_7300383396989726468_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=5o0rnrqGqfUAX_1ee1y&_nc_ht=scontent.fcmb8-1.fna&tp=6&oh=69f46a9102628e7983f2bd4442d64d1c&oe=5FA54FE9"
      channel="Thanusa Krishnamoorthy"
      verified
      subs="270K"
      noOfVideos={250}
      description="i am love with thanusa krishnamoorthy"
      />
      <hr/>
      <VideoRow
      views="1.4M"
      subs="250K"
      description="how to teach english"
      timestamp="20 seconds ago"
      channel="Thanusa Krishnamoorthy"
      image="https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.0-9/s960x960/69231139_2199350510355317_2966316130735489024_o.jpg?_nc_cat=102&_nc_sid=05277f&_nc_ohc=QRS2smTJxQAAX9B92sv&_nc_ht=scontent.fcmb8-1.fna&tp=7&oh=c955d784f3fd7c96fdd381f12446d2ea&oe=5FA59AE5"
      title="lets start english"
      />
        <VideoRow
      views="1.4M"
      subs="250K"
      description="how to teach english"
      timestamp="20 seconds ago"
      channel="Thanusa Krishnamoorthy"
      image="https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.0-9/s960x960/69231139_2199350510355317_2966316130735489024_o.jpg?_nc_cat=102&_nc_sid=05277f&_nc_ohc=QRS2smTJxQAAX9B92sv&_nc_ht=scontent.fcmb8-1.fna&tp=7&oh=c955d784f3fd7c96fdd381f12446d2ea&oe=5FA59AE5"
      title="lets start english"
      />
        <VideoRow
      views="1.4M"
      subs="250K"
      description="how to teach english"
      timestamp="20 seconds ago"
      channel="Thanusa Krishnamoorthy"
      image="https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.0-9/s960x960/69231139_2199350510355317_2966316130735489024_o.jpg?_nc_cat=102&_nc_sid=05277f&_nc_ohc=QRS2smTJxQAAX9B92sv&_nc_ht=scontent.fcmb8-1.fna&tp=7&oh=c955d784f3fd7c96fdd381f12446d2ea&oe=5FA59AE5"
      title="lets start english"
      />
        <VideoRow
      views="1.4M"
      subs="250K"
      description="how to teach english"
      timestamp="20 seconds ago"
      channel="Thanusa Krishnamoorthy"
      image="https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.0-9/s960x960/69231139_2199350510355317_2966316130735489024_o.jpg?_nc_cat=102&_nc_sid=05277f&_nc_ohc=QRS2smTJxQAAX9B92sv&_nc_ht=scontent.fcmb8-1.fna&tp=7&oh=c955d784f3fd7c96fdd381f12446d2ea&oe=5FA59AE5"
      title="lets start english"
      />
        <VideoRow
      views="1.4M"
      subs="250K"
      description="how to teach english"
      timestamp="20 seconds ago"
      channel="Thanusa Krishnamoorthy"
      image="https://scontent.fcmb8-1.fna.fbcdn.net/v/t1.0-9/s960x960/69231139_2199350510355317_2966316130735489024_o.jpg?_nc_cat=102&_nc_sid=05277f&_nc_ohc=QRS2smTJxQAAX9B92sv&_nc_ht=scontent.fcmb8-1.fna&tp=7&oh=c955d784f3fd7c96fdd381f12446d2ea&oe=5FA59AE5"
      title="lets start english"
      />
    </div>
  );
};

export default SearchPage;
