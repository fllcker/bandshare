import React from 'react';
import OneTrack from "./OneTrack";

const TrackList = ({tracks}: any) => {
    return (
        <div className="track-list">
            {
                tracks.map((el: any) => <OneTrack title={el.name} author={el.author} trackId={el.id}/>)
            }
        </div>
    );
};

export default TrackList;