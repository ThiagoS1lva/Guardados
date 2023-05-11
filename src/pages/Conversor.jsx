import Menu from '../ui/components/Menu'
import styles from '../ui/styles/Conversor.module.css'
import axios from 'axios'
import { useRef, useState } from 'react'
import { youtube_parser } from './Conversor/utils'

export default function Conversor() {

    const inputUrlRef = useRef()
    const [urlResult, setUrlResult] = useState(null)
    const RapidKey = import.meta.env.VITE_RAPID_KEY;
    const YoutubeKey = import.meta.env.VITE_YOUTUBE_KEY;
    const [thumbnail, setThumbnail] = useState()
    const [channelName, setChannelName] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        //Pega o ID do video do youtube chamando a função youtube_parser
        const youtubeID = youtube_parser(inputUrlRef.current.value)
        //Pega o thumbnail do video do youtube
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${youtubeID}&key=${YoutubeKey}&part=snippet`;
        axios.get(url)
            .then(response => {
                setThumbnail(response.data.items[0].snippet.thumbnails.high.url)
                setChannelName(response.data.items[0].snippet.channelTitle)
            })
            .catch(error => console.error(error));

        //Faz a requisição para a API do rapidapi
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
        //Pega o link do mp3 e o titulo do video
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
                <h6>Insira o link do vídeo abaixo e clique em procurar, se o video for achado, clique no botão de {`"Baixar MP3"`} abaixo.</h6>
                <form onSubmit={handleSubmit}>
                    <input ref={inputUrlRef}
                        type='text' placeholder='Insira a URL do video do youtube' autoComplete='off'
                        required />
                    {/*Se o video for achado mostra as informações */}
                    {urlResult &&
                        <div className={styles.videoInfo}>
                            <img src={thumbnail} alt="Video thumb" />
                            <div className={styles.info}>
                                <div className={styles.title}>
                                    <p><b>Titulo:</b> {urlResult.title}</p>
                                    <p><b>Duração:</b> {(urlResult.duration / 60).toFixed(2)} min apróx</p>
                                </div>
                                <div>
                                    <p><b>Canal:</b> {channelName}</p>
                                </div>
                            </div>
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