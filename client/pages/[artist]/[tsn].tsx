import type { NextPage } from 'next'
import {useRouter} from "next/router";

const TSN: NextPage = () => {
    const router = useRouter()
    const { artist, tsn } = router.query

    return (
        <div>

        </div>
    )
}

export default TSN