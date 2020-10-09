import React from 'react';
import './VideoRow.css'
const VideoRow = ({views,subs,title,channel,image,timestamp,description}) => {
    return (
        <div className="videoRow">
            <img src={image} alt={channel}/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">{channel}.<span className="videoRow__subsNumber">{subs} Subscribers.</span>  {views} views.{timestamp}. </p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    );
};

export default VideoRow;