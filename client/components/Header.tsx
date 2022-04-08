import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <Link href='/'>
                <a>BandShare</a>
            </Link>

            <div className="nav">
                <Link href='/'>
                    <a>Tracks</a>
                </Link>
                <Link href='/'>
                    <a>Account</a>
                </Link>
            </div>
        </div>
    );3
};

export default Header;