import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@user');
            const storagedToken = await AsyncStorage.getItem('@token');

            console.log(storagedUser == storagedToken)
            console.log(storagedUser)
            if( !!storagedUser && !!storagedToken) {
                setUser(JSON.parse(storagedUser));
                console.log(storagedUser, storagedToken)
                console.log("rafa");
            }
            setLoading(false);
        }

        loadStorageData();
    }, []);

    async function signIn(email: string, password: string) {

        try {
            const response = await auth.signIn(email, password);

            console.log(response);
             
            //@ts-ignore
            setUser(response.data.user);
    
            await AsyncStorage.multiSet([
                ['@user', JSON.stringify(response.data.user)],
                //@ts-ignore
                ['@token', response.data.token]
            ]);
        } catch (e) {
            throw e;
        }
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
