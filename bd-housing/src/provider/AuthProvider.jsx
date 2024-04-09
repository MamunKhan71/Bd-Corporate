import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider  } from "firebase/auth";
import auth from "../utils/firebase.config";
export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signInEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const gitHubSignIn = () => {
        return signInWithPopup(auth, gitProvider)
    }

    const authValues = { createNewUser, signInEmail, googleSignUp, gitHubSignIn }
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;