import Menu from '../components/Menu'
import styles from '../styles/Conversor.module.css'
import axios from 'axios'
import { useRef, useState } from 'react'
import { youtube_parser } from './Conversor/utils'

export default function Conversor() {

    const inputUrlRef = useRef()
    const [urlResult, setUrlResult] = useState(null)
    const RapidKey = import.meta.env.VITE_RAPID_KEY;

    const handleSubmit = (e) => {
        e.preventDefault()
        const youtubeID = youtube_parser(inputUrlRef.current.value)

        const options = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            headers: {
                'X-RapidAPI-Key': RapidKey,
                'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            },
            params: {
                id: youtubeID
            }
        }
        axios(options)
            .then(res => setUrlResult(res.data))
            .catch(err => console.log(err))
        inputUrlRef.current.value = ''
    }


    return (
        <>
            <Menu />
            <div className={styles.container}>
                <h1>Conversor de vídeo do Youtube para MP3</h1>
                <form onSubmit={handleSubmit}>
                    <input ref={inputUrlRef}
                        type='text' placeholder='Insira a URL do video do youtube' autoComplete='off'
                        required />
                    {urlResult &&
                        <div className={styles.videoInfo}>
                            <p><b>Titulo:</b> {urlResult.title}</p>
                            <p><b>Duração:</b> {(urlResult.duration / 60).toFixed(2)} min</p>
                        </div>

                    }
                    <button type='submit'>Procurar</button>
                </form>
                {urlResult &&
                    <div className={styles.download}>
                        <a target='_blank' rel='noreferrer' href={urlResult.link}>
                            Baixar mp3
                        </a>
                    </div>
                }
            </div>
        </>
    )


}