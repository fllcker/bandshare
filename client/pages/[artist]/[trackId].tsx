import type { NextPage } from 'next'
import Link from 'next/link';
import {useRouter} from "next/router";
import PlatformsList from "../../components/PlatformsList";

const TrackId: NextPage = () => {


    let style = {
        backgroundImage: 'url(https://api.band.link/img/bandlinks/ZaerV_W1xWa9ER_370x370.jpeg)',
        backgroundColor: 'rgba(216, 216, 216, 1)',
        width: '100%',
        height: '1009px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(25px)',
        position: 'fixed'
    }

    return (
        <div>
            <div className="blur-wrapper">

                <div className="blur-fixed" style={style}></div>

                <div className="link-wrapper">
                    <div className="trackImage">
                        <img src="https://api.band.link/img/bandlinks/ZaerV_W1xWa9ER_370x370.jpeg" alt="img"/>
                        <div className="titleBar">
                            <h2 className='title-author'>Lida</h2>
                            <p className='title-track'>Утомился</p>
                        </div>
                        <PlatformsList/>

                        <Link href='/'>
                            <p className="poweredby">Powered by BandShare</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackId

export async function getServerSideProps(context: any) {
    const { artist, trackId } = context.query

    console.log(artist, trackId)

    return {
        props: {}, // will be passed to the page component as props
    }
}