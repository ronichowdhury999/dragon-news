import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import { auth } from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
                console.log('user sign in ', currentUser);
                setUser(currentUser);
                setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        logOut,
        signInUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

AuthProvider.propTypes={
    children:PropTypes.node
}