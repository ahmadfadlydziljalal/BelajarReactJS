import React from 'react';
import './YouTubeComp.css'

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="logo192.png" alt="No Image"/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    );
};

YouTubeComp.defaultProps ={
    time : "00.00",
    title : "Untitled",
    desc : "No Description"
}

export default YouTubeComp;