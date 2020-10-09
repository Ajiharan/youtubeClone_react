import React from 'react';
import './ChannelRow.css';
import {Avatar} from '@material-ui/core'
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
const ChannelRow = ({image,channel,description,verified,numOfVideos,subs}) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo"  
            src={image}
            />
            <div className="channelRow__text">
                <h4>{channel}{verified &&<CheckCircleSharpIcon className="channelRow__verifiedIcon"/>}</h4>
                <p>{subs} subscribers.{numOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ChannelRow;