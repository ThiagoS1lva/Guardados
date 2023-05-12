import { useState, createContext, useEffect} from 'react'
import jwt_decode from 'jwt-decode'

export const Context = createContext()

// eslint-disable-next-line react/prop-types
export function Contexts({ children }) {
    const [user, setUser] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('user_token')
        if(token) {
            setUser(jwt_decode(token))
        }
    },[])
    
    



    return (
        <Context.Provider
            value={{ user, setUser }}>
            {children}
        </Context.Provider>
    )
}
