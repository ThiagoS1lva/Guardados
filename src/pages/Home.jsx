import styles from '../styles/Home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {


    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Link to='/insta'>API do instagram</Link>
                </div>
                <div className={styles.col}>
                    <Link to='/calendar'>Calendário</Link>
                </div>
            </div>
        </div>
    )
}