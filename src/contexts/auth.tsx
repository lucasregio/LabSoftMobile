import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
    token?: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string>()

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@user');
            const storagedToken = await AsyncStorage.getItem('@token');

            if(!!storagedUser && !!storagedToken) {
                api.defaults.headers.common.Authorization = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
            }
            setLoading(false);
        }

        loadStorageData();
    }, []);

    async function signIn(email: string, password: string) {

        try {
            const response = await auth.signIn(email, password);
             
           if(!!response.data.user && !!response.data.token) {

                api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
                setUser(response.data.user);
                setToken(response.data.token);
                await AsyncStorage.multiSet([
                    ['@user', JSON.stringify(response.data.user)],
                    ['@token', response.data.token]
                ]);
           }
        //    else{
        //         setUser(null)
        //         setToken('')
        //         await AsyncStorage.multiSet([
        //             ['@user', ''],
                    
        //             ['@token', '']
        //         ]);
        //    }
    
        } catch (e) {
            throw e;
        }
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            api.defaults.headers.common.Authorization = '';
            setUser(null);
        })
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, loading,token, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
