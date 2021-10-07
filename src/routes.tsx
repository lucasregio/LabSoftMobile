import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

const AppStack = createStackNavigator();

export type RootStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
};

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="ForgotPassword" component={ForgotPassword}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
