import { signOut as amplifySignOut } from 'aws-amplify/auth'

export const useAuth = () => {
    const signOut = async () => {
        return amplifySignOut()
    }

    return {
        signOut,
    }
}
