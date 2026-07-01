import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { useEffect } from "react";
import { Platform, useColorScheme } from "react-native";

//Screens
import HomeScreen from "./HomeScreen";
import ProfileScreen from './ProfileScreen';
import LibraryScreen from './LibraryScreen';

//Icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function TabManagement() {
    const isDark = useColorScheme() === 'dark';

    useEffect(() => {
        const navBarColor = '#0b0023';
        const lightIcons = !isDark;

        try {
            if (Platform.OS === 'android') {
                changeNavigationBarColor(navBarColor, lightIcons, false);
            }
        } catch (e) {
            console.log('Error setting navigation bar color:', e);
        }

    }, [isDark]);

    const bgcolor = '#0b0023';
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: bgcolor }}>
            <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = 'home'
                        return <FontAwesome name={iconName} size={30} color={color} />
                    }
                    else if (route.name === 'Profile') {
                        iconName = "user";
                        return <FontAwesome name={iconName} size={30} color={color} />
                    }
                    else if(route.name === 'Library') {
                        iconName='library';
                        return <Ionicons name={iconName} size={30} color={color} />
                    }
                },
                tabBarActiveTintColor: '#8e64ff',
                tabBarInactiveTintColor: '#7e7e7eff',
                tabBarShowLabel: false,
                tabBarStyle: { height: '6%', backgroundColor: bgcolor, alignItems:'center', alignSelf:'center', justifyContent:'center' }
            })}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name='Library' component={LibraryScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />

            </Tab.Navigator>
        </SafeAreaView>
    );
}