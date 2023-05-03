import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const GitHubAuthProvider = new GithubAuthProvider()
    const GoogleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    const CreateAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const SignInWithGoogle = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const SignInWithGitHub = () => {
        return signInWithPopup(auth, GitHubAuthProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

        return () => unsubscribe()
    }, [])

    const logOut = () => {

        return signOut(auth)

    }
    const allInfo = {
        user: user,
        CreateAccount,
        SignIn,
        SignInWithGoogle,
        SignInWithGitHub,
        logOut
    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider