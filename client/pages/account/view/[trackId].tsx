import React, {useState} from 'react';
import axios from "axios";
import MainLayout from "../../../components/MainLayout";
import PlatformLink from "../../../components/PlatformLink";
import cookies from "next-cookies";
import {useRouter} from "next/router";
import Link from 'next/link';
import jwt_decode from "jwt-decode";

const TrackView = ({track, links, jwt, username}: any) => {
    let [platformChoose, setPlatformChoose] = useState('')
    let [trackRef, setTrackRef] = useState('')
    let router = useRouter()

    const newPlatformButton = async () => {
        if (!jwt) return router.push('/account/login')
        if (platformChoose == '') return 1;

        let payload = {
            platform: platformChoose,
            trackRef,
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
                        <option value="">Выберите платформу</option>
                        <option value="Apple Music">Apple Music</option>
                        <option value="Spotify">Spotify</option>
                        <option value="VK Музыка">VK Музыка</option>
                        <option value="Yandex Music">Yandex Music</option>
                        <option value="YouTube Music">YouTube Music</option>
                    </select>

                    <input type="text" className='new-platform-input' value={trackRef} onChange={e => setTrackRef(e.target.value)}/>

                    <button onClick={newPlatformButton}>Добавить</button>
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