import React from 'react';
import PlatformLink from "./PlatformLink";

const PlatformsList = ({links}: any) => {
    return (
        <div className="platforms">
            {
                links.map(el => <PlatformLink platform={el.platform} link={el.trackRef}/>)
            }
        </div>
    );
};

export default PlatformsList;