import React, {useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";

const NewTrackMenu = ({jwt}: any) => {
    let router = useRouter()
    let [trackName, setTrackName] = useState('')
    let [imageSrc, setImageSrc] = useState('')

    let [showToggle, setShowToggle] = useState(false)

    const menuShowToggle = () => {
        setShowToggle(!showToggle)
    }

    const newTrack = () => {
        if (!jwt) return router.push('/account/login')

        let payload = {
            name: trackName,
            image: imageSrc
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
        <>
            <p className="toggler" onClick={menuShowToggle}>Добавить новый трек</p>

            {
                showToggle ?
                    <div className="new-track">
                        <input type="text" placeholder='Название' value={trackName} onChange={e => setTrackName(e.target.value)}/>
                        <input type="text" placeholder='Картинка' value={imageSrc} onChange={e => setImageSrc(e.target.value)}/>
                        <button onClick={newTrack}>Добавить</button>
                    </div>
                : null
            }

        </>
    );
};

export default NewTrackMenu;