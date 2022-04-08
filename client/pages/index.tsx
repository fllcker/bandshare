import type { NextPage } from 'next'
import Link from 'next/link';
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
    return (
        <MainLayout>
            <div className="center">
                <h1 className='index-h1'>Share your music on BandShare</h1>
                <Link href='/account/singup'>
                    <button>Get started</button>
                </Link>
            </div>
        </MainLayout>
    )
}

export default Home
