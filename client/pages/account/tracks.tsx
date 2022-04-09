import type { NextPage } from 'next'
import MainLayout from "../../components/MainLayout";
import jwt_decode from "jwt-decode";
import cookies from "next-cookies";
import axios from "axios";
import TrackList from "../../components/TrackList";
import NewTrackMenu from "../../components/NewTrackMenu";

const TracksPage: NextPage = ({tracks, username, jwt}: any) => {

    return (
        <MainLayout>
            <div className="tw">
                <h1>{username}</h1>
                <div className="tracks">
                    <h1>Мои треки: </h1>
                    {
                        tracks.length > 0 ?
                            <TrackList tracks={tracks}/>
                        : <p className='text-center'>Треков нет</p>
                    }
                    <NewTrackMenu jwt={jwt}/>
                </div>
            </div>
        </MainLayout>
    )
}

export default TracksPage

export async function getServerSideProps(context: any) {
    const {jwt} = cookies(context);
    let returnProps = {username: 'null', jwt: null}
    if (jwt) returnProps.username = jwt_decode(jwt).username

    let tracks = await axios({
        url: '/tracks/author/' + returnProps.username
    })
        .then(response => response.data)

    if (!tracks) tracks = [];

    tracks = tracks.reverse()

    return {
        props: {...returnProps, tracks, jwt}, // will be passed to the page component as props
    }
}