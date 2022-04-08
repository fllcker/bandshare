import type { NextPage } from 'next'
import MainLayout from "../../components/MainLayout";
import jwt_decode from "jwt-decode";
import cookies from "next-cookies";
import axios from "axios";
import TrackList from "../../components/TrackList";
import {useRouter} from "next/router";
import {useState} from "react";

const TracksPage: NextPage = ({tracks, username, jwt}: any) => {
    let router = useRouter()
    let [trackName, setTrackName] = useState('')

    const newTrack = () => {
        if (!jwt) return router.push('/account/login')

        let payload = {
            name: trackName
        }

        let result = axios({
            url: '/tracks',
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
                <h1>{username}</h1>
                <div className="tracks">
                    <h1>Мои треки: </h1>
                    {
                        <TrackList tracks={tracks}/>
                    }

                    <div className="new-track">
                        <input type="text" placeholder='Название' value={trackName} onChange={e => setTrackName(e.target.value)}/>
                        <button onClick={newTrack}>Новый трек</button>
                    </div>

                </div>
            </div>
        </MainLayout>
    )
}

export default TracksPage

export async function getServerSideProps(context: any) {
    const {jwt} = cookies(context);
    const decoded = jwt_decode(jwt)
    const username = decoded.username

    let tracks = await axios({
        url: '/tracks/author/' + username
    })
        .then(response => response.data)

    if (!tracks) tracks = []

    tracks = tracks.reverse()

    return {
        props: {tracks, username, jwt}, // will be passed to the page component as props
    }
}