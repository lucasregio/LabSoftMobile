import React from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

import Tab from './tab.routes'
import HeaderRight from '../components/HeaderRight';
import CustomDrawer from '../pages/CustomDrawer';
import colors from '../styles/colors';
import Partners from '../pages/Partners';

const Drawer = createDrawerNavigator();

export type DrawerParamList = {
    Home: undefined;
    Partners: undefined;
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
            <Drawer.Screen options={drawerOptions}
                name="Home"
                component={Tab}
            />
            <Drawer.Screen options={{headerShown: false}}
                name="Parceiros"
                component={Partners}
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
        backgroundColor: colors.primary,
    },
    drawerLabelStyle: {
        fontFamily: 'Nunito_400Regular', 
        fontSize: 20,
    },
    drawerInactiveTintColor: colors.dark,
    drawerActiveTintColor: colors.primary,
}


export default DrawerNavigator;
