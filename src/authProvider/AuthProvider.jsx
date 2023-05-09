import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const registerUser = (email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
       
    }
    const authInfo = {registerUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;