import React from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";

import Tab from './tab.routes'
import HeaderRight from '../components/HeaderRight';
import CustomDrawer from '../pages/CustomDrawer';
import colors from '../styles/colors';
import Partners from '../pages/Partners';
import { useHeader } from '../contexts/header';
import ChangeUser from '../pages/ChangeUser';

const Drawer = createDrawerNavigator();

export type DrawerParamList = {
    Home: undefined;
    Perfil: undefined;
    Partners: undefined;
};

const DrawerNavigator = () => {

    const { title, showHeader } = useHeader();

    return (
        
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
            <Drawer.Screen
                name="Home"
                component={Tab}
                options={{...drawerItemOptions, ...drawerOptions, ...{title: title, headerShown: showHeader}}}
            />
            <Drawer.Screen 
                name="Perfil"
                component={ChangeUser}
                options={drawerItemOptions}
            />
            <Drawer.Screen 
                name="Parceiros"
                component={Partners}
                options={drawerItemOptions}
            />
        </Drawer.Navigator>

    );
}

const drawerOptions: DrawerNavigationOptions = {
    headerRight: () => <HeaderRight />,
    headerShown: true,
    headerTintColor: '#FFF',
}

const drawerItemOptions: DrawerNavigationOptions = {
    headerShown: false,
    headerStyle: { 
        backgroundColor: colors.primary,
    },
    drawerLabelStyle: {
        fontFamily: 'Nunito_400Regular', 
        fontSize: 20,
    },
    drawerInactiveTintColor: colors.dark,
    drawerActiveTintColor: colors.primary
}


export default DrawerNavigator;
