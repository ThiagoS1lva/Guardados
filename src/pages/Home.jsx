import styles from '../ui/styles/Home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {


    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Link to='/insta'>API do instagram</Link>
                </div>
                <div className={styles.col}>
                    <Link to='/Conversor'>Conversor Youtube para MP3</Link>
                </div>
                <div className={styles.col}>
                    <Link to="/Login">Login</Link>
                </div>
            </div>
        </div>
    )
}