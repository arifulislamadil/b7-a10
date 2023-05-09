import React from 'react';


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const authInfo = {};
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;