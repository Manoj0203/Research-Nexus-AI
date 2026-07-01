import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

import auth from '../Services/firebaseAuth';

const LogoutButton = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const navi = useNavigation();

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '961199237843-tlaevrqt9cbsdsji96p155mgdj7141rt.apps.googleusercontent.com'
        })
    }, [])

    const signOut = async () => {
        try {
            setErrorMessage('');

            await GoogleSignin.signOut();
            await auth.signOut();

            navi.replace('Welcome');
            
        } catch (error) {
        }
    };

    return (
            <TouchableOpacity onPress={signOut} style={styles.button}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
    );
};

export default LogoutButton;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: '#ff3131',
        height: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    buttonText: {
        color: '#ff3131',
        fontSize: 18,
        fontWeight: '700',
    },
    errorText: {
        marginTop: 10,
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
    },
});