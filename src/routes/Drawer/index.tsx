import React from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

import Tab from '../Tab'
import HeaderRight from '../../components/HeaderRight';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen options={drawerOptions}
                name="Home"
                component={Tab}
            />
        </Drawer.Navigator>
    );
}

const drawerOptions: DrawerNavigationOptions = {
    headerRight: () => <HeaderRight />,
    title: 'Home',
    headerShown: true,
    headerTintColor: '#FFF',
    headerStyle: { 
        backgroundColor: '#483BC4',
    }
}

export default DrawerNavigator;
