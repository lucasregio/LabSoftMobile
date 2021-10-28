import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import colors from '../styles/colors';
import Register from '../pages/Register';
import Athletic, { AthleticScreenProp } from '../pages/Athletic';
import RegisterSelectAthletic from '../pages/Register/RegisterSelectAthletic';

const AuthStack = createStackNavigator<AuthStackParamList>();

export type AuthStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
    Athletic: any;
    Register: {
        athleticId: string
        athleticName: string
    } | undefined;
    RegisterSelectAthletic: undefined
};

const stackOptions: StackNavigationOptions = {
    headerTitle: '',
    headerShown: true,
    headerTransparent: true,
    headerTintColor: colors.primary,
}

const AuthRoutes = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login" screenOptions={stackOptions}>
            <AuthStack.Screen name="Login" component={Login}/>
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword}/>
            <AuthStack.Screen name="Athletic" component={Athletic}/>
            <AuthStack.Screen name="Register" component={Register}/>
            <AuthStack.Screen name="RegisterSelectAthletic" component={RegisterSelectAthletic}/>
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;

