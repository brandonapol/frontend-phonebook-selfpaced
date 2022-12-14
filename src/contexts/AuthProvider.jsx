import { createContext, useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from '@firebase/auth'

export const AuthContext = createContext()

export const AuthProvider = function(props) {
    const [user, setUser] = useState({ loggedIn: false })

    const auth = getAuth()
    const provider = new GoogleAuthProvider()

    const login = async function() {
        const result = await signInWithPopup(auth, provider)

        console.log(result)
    }

    const logout = async function() {
        const result = await signOut(auth)

        console.log(result)
    }

    useEffect(() => {
        onAuthStateChanged(auth, function(userInfo) {
            if (userInfo) {
                // HANDLE USER LOGGING IN
                setUser({
                    username: userInfo.displayName,
                    email: userInfo.email,
                    uid: userInfo.uid,
                    loggedIn: true
                })
            } else {
                // HANDLE USER LOGGING OUT
                setUser({ loggedIn: false })
            }
        })
    }, [])

    const value = {
        login: login,
        logout: logout,
        user: user
    }

    return (
        <AuthContext.Provider value={value}>
            { props.children }
        </AuthContext.Provider>
    )
}