import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './InstaFeed.module.css'


export default function InstaFeed() {
    const [feedList, setFeedList] = useState([])

    async function getInstaFeed() {
        const token = import.meta.env.VITE_INSTA_TOKEN;
        const fields = "media_url, media_type, permalink, album_id, caption"
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`

        try {
            const { data } = await axios.get(url);
            setFeedList(data.data)
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getInstaFeed()
    }, [])
    return (
        <>
            <div className={styles.container}>
                {feedList.map(item => {
                    return (
                        <div key={item.id}className={styles.item}>
                            <a href={item.permalink} target='_blank rel=noreferrer'>
                                {item.media_type === "VIDEO" ?
                                    <video controls>
                                        <source src={item.media_url} />
                                    </video> :
                                    <img src={item.media_url} alt={item.id} />}
                            </a>
                            <h3>{item.caption}</h3>
                        </div>
                    )
                })}
            </div>
        </>
    )
}