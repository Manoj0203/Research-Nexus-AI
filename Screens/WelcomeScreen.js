import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, useColorScheme } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GoogleSignin, } from '@react-native-google-signin/google-signin';
import auth from '../Services/firebaseAuth';
import { GoogleAuthProvider, signInWithCredential, onAuthStateChanged } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const isDarkMode = useColorScheme() === 'dark';
    const navi = useNavigation();

    const [user, setUser] = useState(null);

    // MOVE TO SPLASH SCREEN
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser){
                navi.replace('Tab')
            }
        });

        return unsubscribe;
    }, [user]);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '961199237843-tlaevrqt9cbsdsji96p155mgdj7141rt.apps.googleusercontent.com'
        })
    }, [])

    async function onGoogleSignIn() {
        try {
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            });

            const signInResult = await GoogleSignin.signIn();

            // Support different package versions
            const idToken =
                signInResult?.idToken ||
                signInResult?.data?.idToken;

            if (!idToken) {
                throw new Error('No ID token received from Google');
            }

            const credential =
                GoogleAuthProvider.credential(idToken);

            const userCredential = await signInWithCredential(
                auth,
                credential
            );

            // Navigate to Home Screen here if needed
            // navigation.replace('Home');

        } catch (error) {
            console.log('Google Sign-In Error:', error);
        }
    }

    return (
        <LinearGradient
            colors={['#080428', '#120038', '#05001A']}
            style={styles.container}>
            <StatusBar barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />


            <SafeAreaView style={styles.content}>

                <Image
                    source={require('../Assets/Images/AIavatar.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.title}>AI Research</Text>
                <Text style={styles.titlePurple}>Paper Companion</Text>

                <Text style={styles.subtitle}>
                    {user?.email}
                </Text>
                <Text style={styles.subtitle}>
                    Research Assistant
                </Text>

                <View style={styles.bottomContainer}>

                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>
                            Get Started
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onGoogleSignIn} style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                            Sign In with Google
                        </Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
    },

    logo: {
        width: 180,
        height: 180,
        marginTop: '25%',
    },

    title: {
        color: '#FFFFFF',
        fontSize: 42,
        fontWeight: '700',
    },

    titlePurple: {
        color: '#8B5CF6',
        fontSize: 42,
        fontWeight: '700',
        marginBottom: 20,
    },

    subtitle: {
        color: '#D1D5DB',
        fontSize: 18,
        lineHeight: 28,
    },

    bottomContainer: {
        width: '100%',
        marginTop: 'auto',
        marginBottom: 50,
    },

    primaryButton: {
        height: 64,
        borderRadius: 18,
        backgroundColor: '#6D28D9',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
    },

    primaryButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },

    secondaryButton: {
        height: 64,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#6D28D9',
        justifyContent: 'center',
        alignItems: 'center',
    },

    secondaryButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },
});