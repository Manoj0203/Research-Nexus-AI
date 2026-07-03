import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from '@firebase/auth';

import auth from '../Services/firebaseAuth';

const SplashScreen = () => {

    const scale = useRef(new Animated.Value(0)).current;
    const navi = useNavigation();

    useEffect(() => {
        Animated.timing(scale, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            console.log(user)
            const timer = setTimeout(() => {
                if (user) {
                    navi.replace('Tab');
                } else {
                    navi.replace('Welcome');
                }
            }, 1500);

            return () => clearTimeout(timer);
        });

        return unsubscribe;
    }, [navi]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0b0023' }}>
            <Animated.Image
                source={require('../Assets/Images/AIavatar.png')}
                style={[
                    styles.logo,
                    {
                        transform: [{ scale }],
                    },
                ]} />
            <Animated.Text style={[{ color: '#FFF', fontSize: 25, fontWeight: 900 }, { transform: [{ scale }] }]}>
                Research Nexus AI
            </Animated.Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    }
})