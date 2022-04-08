import Link from 'next/link';
import React from 'react';

const OneTrack = ({title, author, trackId}: any) => {
    return (
        <div className="one-track">
            <p>{title} <strong>{author}</strong></p>

            <Link href={'/account/view/' + trackId}>
                <button>Открыть</button>
            </Link>
        </div>
    );
};

export default OneTrack;