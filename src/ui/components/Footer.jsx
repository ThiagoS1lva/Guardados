import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <p>Criado por <a href='https://www.linkedin.com/in/thiago-oliveira-49952823a/' target='blank'>Thiago Oliveira</a></p>
            <Link to="/Politica"><p>Politica e privacidade</p></Link>
        </footer>
    )
}