import React from 'react';
import { View, ActivityIndicator } from "react-native";
import colors from '../styles/colors';

import { useAuth } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {

    const { signed, loading } = useAuth();

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color={colors.primary}/>
            </View>
        );
    }
    
    return signed ? <AppRoutes/> : <AuthRoutes/>;
}

export default Routes;
