import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from '../routes/Drawer';

export type RootStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
};

const Routes = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    );
}

export default Routes;
