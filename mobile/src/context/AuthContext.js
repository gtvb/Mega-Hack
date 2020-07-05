import React, { createContext, useState } from 'react'
import { AsyncStorage } from 'react-native'
import { setStatusBarTranslucent } from 'expo-status-bar'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const signIn = async () => {
            if(user !== {}) {           
                await AsyncStorage.setItem('User', user)
                setIsAuthenticated(true)
            
            } else {
                alert('Error')
            }
    }

    const signOut = async () => {
        try {
            await AsyncStorage.removeItem('User')
            setIsAuthenticated(false)
        } catch {
            console.log('Failed')
        }
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}