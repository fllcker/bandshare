import type { NextPage } from 'next'
import MainLayout from "../../components/MainLayout";
import {useState} from "react";
import axios from "axios";

const LoginPage: NextPage = () => {
    let [username, setUserName] = useState('')
    let [password, setPassword] = useState('')

    let nextButton = async () => {
        let payload = {
            username,
            password
        }

        let token = await axios({
            url: '/users/login',
            method: "POST",
            data: payload
        })
            .then(response => response.data)

        setUserName('')
        setPassword('')
    }

    return (
        <MainLayout>
            <div className="mw">
                <h1>Login</h1>
                <p className='placeholder'>UserName</p>
                <input type="text" value={username} onChange={e => setUserName(e.target.value)}/>

                <p className='placeholder'>Password</p>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <br/><button onClick={nextButton}>Next</button>
            </div>
        </MainLayout>
    )
}

export default LoginPage
