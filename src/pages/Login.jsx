import Menu from '../ui/components/Menu'
import styles from '../ui/styles/Login.module.css'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { useContext, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { Context } from '../data/context/UserContext'

export default function Login() {
    const { user, setUser } = useContext(Context)
    const clientID = import.meta.env.VITE_CLIENT_ID;

    useEffect(() => {
        console.log(user.picture)
    }, [user])

    //Deslogar
    const deslogar = () => {
        localStorage.removeItem('user_token');
        setUser('');
    }

    return (
        <GoogleOAuthProvider clientId={clientID}>
            <>
                <Menu />
                <div className={styles.container}>
                    <h1>Login</h1>
                    {!user ?
                        <div className={styles.googleBtn}>
                            <GoogleLogin
                                onSuccess={(showUserInformation) => {
                                    let userContent = jwt_decode(showUserInformation.credential)
                                    localStorage.setItem('user_token', showUserInformation.credential)
                                    setUser(userContent)
                                }}
                                onError={() => {
                                    console.log('Falha no Login');
                                }}
                                size='large'
                            />
                        </div> :
                        <div className={styles.userInfo}>
                            {user &&
                                <>
                                    <h2>{user.name}</h2>
                                    <img src={user.picture} alt={user.name}/>
                                </>
                            }
                            <button onClick={deslogar}>Deslogar</button>
                        </div>}


                </div>
            </>
        </GoogleOAuthProvider>
    )
}