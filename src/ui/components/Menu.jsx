import { Link } from 'react-router-dom';
import styles from '../styles/Menu.module.css'

export default function Menu() {

    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <Link to={'/'}>Home</Link>
            </div>
        </div>
    )
}