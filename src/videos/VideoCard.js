import React from "react";
import "./VideoCard.css";
import { Avatar } from "@material-ui/core";
const VideoCard = ({
  image,
  title,
  channel,
  timestamp,
  views,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img loading="lazy" alt={channel} src={image} />
      <div className="videoCard__info">
        <Avatar
          src={channelImage}
          className="videoCard__avatar"
          alt={channel}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
