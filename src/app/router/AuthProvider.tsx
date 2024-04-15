import React, { ReactNode } from 'react'
import { AuthContext } from './AuthContext'
import { useAuth } from '../../hooks/useAuth'

export interface AuthProvider {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthProvider> = ({ children }) => {
    const { signOut } = useAuth()

    return (
        <AuthContext.Provider
            value={{
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
