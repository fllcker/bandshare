import React, {useEffect, useState} from 'react';
import axios from "axios";
import MainLayout from "../../../components/MainLayout";
import PlatformLink from "../../../components/PlatformLink";
import cookies from "next-cookies";
import {useRouter} from "next/router";
import Link from 'next/link';
import jwt_decode from "jwt-decode";

const TrackView = ({track, links, jwt, username}: any) => {
    let [platformChoose, setPlatformChoose] = useState('Apple Music')
    let [prePlatformLink, setPrePlatformLink] = useState('')
    let [trackRef, setTrackRef] = useState('')
    let router = useRouter()

    const linksPre = new Map([
        ['Apple Music', 'https://music.apple.com/'],
        ['VK Музыка', 'https://boom.ru/redirect/album/'],
        ['Yandex Music', 'https://music.yandex.ru/album/'],
        ['Spotify', 'https://open.spotify.com/'],
        ['YouTube Music', 'https://music.youtube.com/watch?v=']
    ])


    const newPlatformButton = async () => {
        if (!jwt) return router.push('/account/login')
        if (platformChoose == '') return 1;

        let newRef = linksPre.get(platformChoose) + trackRef

        let payload = {
            platform: platformChoose,
            trackRef: newRef,
            trackId: track.id
        }

        let result = axios({
            url: '/links',
            method: 'POST',
            data: payload,
            headers: {
                'Authorization': 'Bearer ' + jwt
            }
        })
            .then((response) => {
                router.reload()
                return response.data
            })
    }

    useEffect(() => setPrePlatformLink(linksPre.get(platformChoose) || 'Apple Music'), [platformChoose])

    return (
        <MainLayout>
            <div className="tw">
                <h1>{track.name} ({track.author})</h1>

                <Link href={'/' + username + '/' + track.id}>
                    <button>Get share link</button>
                </Link>

                <h2>Платформы: </h2>
                {
                    links.map(el => <PlatformLink platform={el.platform} link={el.trackRef}/>)
                }


                <p>Добавить платформу: </p>

                <div className="new-platform-line">
                    <select value={platformChoose} onChange={e => setPlatformChoose(e.target.value)}>
                        <option value="Apple Music">Apple Music</option>
                        <option value="Spotify">Spotify</option>
                        <option value="VK Музыка">VK Музыка</option>
                        <option value="Yandex Music">Yandex Music</option>
                        <option value="YouTube Music">YouTube Music</option>
                    </select>

                    <br/>
                    <div className='new-platform-inputs'>
                        <div className='new-platform-ib'>
                            <p className="link-to-platform">{prePlatformLink}</p>
                            <input type="text" className='new-platform-input' value={trackRef} onChange={e => setTrackRef(e.target.value)}/>
                        </div>

                        <button onClick={newPlatformButton}>Добавить</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default TrackView;

export async function getServerSideProps(context: any) {
    const {jwt} = cookies(context);
    const decoded = jwt_decode(jwt)
    const username = decoded.username

    const {trackId} = context.query

    let track = await axios({
        url: '/tracks/id/' + trackId
    })
        .then(response => response.data)

    let links = await axios({
        url: '/links/id/' + trackId
    })
        .then(response => response.data)

    if (!links) links = []

    return {
        props: {track, links, jwt, username}, // will be passed to the page component as props
    }
}