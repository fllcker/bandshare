import type { NextPage } from 'next'
import MainLayout from "../../components/MainLayout";
import {useState} from "react";

const SingUpPage: NextPage = () => {
    let [username, setUserName] = useState('')
    let [password, setPassword] = useState('')
    let [password2, setPassword2] = useState('')

    let nextButton = () => {
        setUserName('')
        setPassword('')
        setPassword2('')
    }

    return (
        <MainLayout>
            <div className="mw">
                <h1>SingUp</h1>
                <p className='placeholder'>UserName</p>
                <input type="text" value={username} onChange={e => setUserName(e.target.value)}/>

                <p className='placeholder'>Password</p>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <p className='placeholder'>Password (again)</p>
                <input type="password" value={password2} onChange={e => setPassword2(e.target.value)}/>

                <br/><button onClick={nextButton}>Next</button>
            </div>
        </MainLayout>
    )
}

export default SingUpPage
