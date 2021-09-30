import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import Login from '../../pages/Login';
import ForgotPassword from '../../pages/ForgotPassword';
import colors from '../../styles/colors';


const AppStack = createStackNavigator();

export type RootStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
};

const stackOptions: StackNavigationOptions = {
    headerTitle: '',
    headerShown: true,
    headerTransparent: true,
    headerTintColor: colors.primary,
}

const Authentication = () => {
    return (
        <AppStack.Navigator initialRouteName="Login" screenOptions={stackOptions}>
            <AppStack.Screen name="Login" component={Login}/>
            <AppStack.Screen name="ForgotPassword" component={ForgotPassword}/>
        </AppStack.Navigator>
    );
}

export default Authentication;

