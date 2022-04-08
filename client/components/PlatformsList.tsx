import React from 'react';
import PlatformLink from "./PlatformLink";

const PlatformsList = () => {
    return (
        <div className="platforms">
            <PlatformLink platform='Apple Music' link=''/>
            <PlatformLink platform='VK Музыка' link=''/>
            <PlatformLink platform='Yandex Music' link=''/>
            <PlatformLink platform='Spotify' link=''/>
            <PlatformLink platform='YouTube Music' link=''/>
        </div>
    );
};

export default PlatformsList;