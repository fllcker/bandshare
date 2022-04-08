import React from 'react';
import Link from "next/link";

const PlatformLink = ({platform, link}: any) => {
    return (
        <div className="platform">
            <div className='platformTitle'>
                <img src={'/' + platform + '.png'} alt={platform} className="platformImage"/>
                <p className='platform-title'>{platform}</p>
            </div>

            <Link href={link}>
                <a className='playbtn'>Слушать</a>
            </Link>
        </div>
    );
};

export default PlatformLink;