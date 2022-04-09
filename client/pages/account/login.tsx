import type { NextPage } from 'next'
import MainLayout from "../../components/MainLayout";
import {useState} from "react";
import axios from "axios";
import {setCookies} from "cookies-next";
import {useRouter} from "next/router";
import Link from "next/link";

const LoginPage: NextPage = () => {
    let [username, setUserName] = useState('')
    let [password, setPassword] = useState('')
    let [errors, setErrors] = useState('')
    let router = useRouter()

    let nextButton = async () => {
        if (username.length == 0 || password.length == 0) return setErrors('Заполните данные')

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

        const isJwt = token.split('.').length == 3

        if (isJwt) {
            setCookies('jwt', token, {
                maxAge: 60 * 60 * 48
            })

            await router.push('/account/tracks/')
        } else setErrors(token)

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

                <p className="err">{errors}</p>

                <div className="dw">
                    <button onClick={nextButton}>Next</button>
                    <Link href='/account/singup'>Нет аккаунта?</Link>
                </div>
            </div>
        </MainLayout>
    )
}

export default LoginPage
