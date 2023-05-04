import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase.init';
// Firebase importaiontion
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    // Auth Providers
    const GitHubAuthProvider = new GithubAuthProvider()
    const GoogleProvider = new GoogleAuthProvider()
    //    States
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app);
    const CreateAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const SignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const SignInWithGoogle = () => {
        setLoading(true)

        return signInWithPopup(auth, GoogleProvider)
    }

    const SignInWithGitHub = () => {
        setLoading(true)
        return signInWithPopup(auth, GitHubAuthProvider)
    }

    const ResetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const logOut = () => {
        return signOut(auth)

    }
    // Context Api Values
    const allInfo = {
        user: user,
        loading: loading,
        CreateAccount,
        SignIn,
        SignInWithGoogle,
        SignInWithGitHub,
        ResetPassword,
        logOut
    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider