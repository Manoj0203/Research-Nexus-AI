import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import AppBarPage from '../Utils/AppBarPage'
import { Divider } from 'react-native-paper';

const HelpAndSupportScreen = () => {

    const APP_URL = 'com.develax.researchnexusai'

    const openPlayStore = async () => {
        const url = `market://details?id=${APP_URL}`;
        const webUrl = `https://play.google.com/store/apps/details?id=${APP_URL}`;

        try {
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                await Linking.openURL(url);
            } else {
                await Linking.openURL(webUrl);
            }
        } catch (error) {
            console.error('Failed to open Play Store:', error);
        }
    }

    const openEmail = async () => {
        const email = 'nmanoj0212@gmail.com';

        const url = `mailto:${email}?subject=${encodeURIComponent('')}&body=${encodeURIComponent('')}`;

        try {
            await Linking.openURL(url);
        } catch (error) {
            console.error('Failed to open email app:', error);
        }
    }

    return (
        <>
            <AppBarPage title='Help & Support' />

            {/* Quick Help */}
            <View style={[styles.containers, {paddingTop: 0}]}>
                <View style={{ flexDirection: 'row', gap: 10, paddingVertical: '2.5%', paddingHorizontal: '4%', alignItems: 'center' }}>
                    <Ionicons name="help-circle-sharp" size={24} color="#8e64ff" />
                    <Text style={{ color: '#8e64ff', fontSize: 17 }}>Quick Help</Text>
                </View>
                <View style={styles.partContainer}>
                    {/* Getting Started */}
                    <TouchableOpacity onPress={null} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
                        <View style={{ paddingHorizontal: '2%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <Ionicons name="rocket-outline" size={22} color="#CFCFFF" />
                            <View>
                                <Text style={{ color: '#FFF', fontSize: 15 }}>Getting Started</Text>
                                <Text style={{ color: 'grey' }}>Learn the basics of the App</Text>
                            </View>
                        </View>
                        <Feather name="chevron-right" size={24} color="#FFF" />
                    </TouchableOpacity>

                    <Divider />

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
                        <View style={{ paddingHorizontal: '2%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <Feather name="file" size={24} color="#CFCFFF" />
                            <View>
                                <Text style={{ color: '#FFF', fontSize: 15 }}>Upload and Manage Papers</Text>
                                <Text style={{ color: 'grey' }}>How to upload papers?</Text>
                            </View>
                        </View>
                        <Feather name="chevron-right" size={24} color="#FFF" />
                    </TouchableOpacity>

                    <Divider />

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
                        <View style={{ paddingHorizontal: '2%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <Ionicons name="sparkles-outline" size={22} color="#CFCFFF" />
                            <View>
                                <Text style={{ color: '#FFF', fontSize: 15 }}>AI Feature</Text>
                                <Text style={{ color: 'grey' }}>Summaries, chat, and insights</Text>
                            </View>
                        </View>
                        <Feather name="chevron-right" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* SUPPORT */}
                <View style={{ flexDirection: 'row', gap: 10, paddingVertical: '2.5%', paddingHorizontal: '4%', alignItems: 'center' }}>
                    <FontAwesome5 name="hands-helping" size={20} color="#8e64ff" />
                    <Text style={{ color: '#8e64ff', fontSize: 17 }}>Support</Text>
                </View>
                <View style={styles.partContainer}>
                    {/* Support */}
                    <TouchableOpacity onPress={openEmail} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
                        <View style={{ paddingHorizontal: '2%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <Feather name="mail" size={22} color="#CFCFFF" />
                            <View>
                                <Text style={{ color: '#FFF', fontSize: 15 }}>Contact Us</Text>
                                <Text style={{ color: 'grey' }}>nmanoj0212@gmail.com</Text>
                            </View>
                        </View>
                        <Feather name="chevron-right" size={24} color="#FFF" />
                    </TouchableOpacity>

                    <Divider />

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
                        <View style={{ paddingHorizontal: '2%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <Ionicons name="warning-outline" size={24} color="#CFCFFF" />
                            <View>
                                <Text style={{ color: '#FFF', fontSize: 15 }}>Report an Issue</Text>
                                <Text style={{ color: 'grey' }}>Let us know what went wrong</Text>
                            </View>
                        </View>
                        <Feather name="chevron-right" size={24} color="#FFF" />
                    </TouchableOpacity>

                    <Divider />

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
                        <View style={{ paddingHorizontal: '2%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <FontAwesome6 name="lightbulb" size={24} color="#CFCFFF" />
                            <View>
                                <Text style={{ color: '#FFF', fontSize: 15 }}>Feature Request</Text>
                                <Text style={{ color: 'grey' }}>Suggest new features</Text>
                            </View>
                        </View>
                        <Feather name="chevron-right" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>

                {/* Love to App */}
                <View style={[styles.containers, { paddingHorizontal: 0, justifyContent: 'flex-start', marginTop: 20, height: '100%',  }]}>
                    <View style={styles.partContainer}>
                        <TouchableOpacity onPress={openPlayStore} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
                            <View style={{ paddingHorizontal: '2%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                                <Feather name="star" size={40} color="#8e64ff" />
                                <View>
                                    <Text style={{ color: '#FFF', fontSize: 15 }}>Love the App?</Text>
                                    <Text style={{ color: 'grey' }}>Rate us on the Play Store</Text>
                                </View>
                            </View>
                            <Feather name="chevron-right" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default HelpAndSupportScreen

const styles = StyleSheet.create({
    containers: {
        backgroundColor: '#0b0023',
        paddingHorizontal: '4%',
        paddingVertical: '2.5%',
    },
    partContainer: {
        backgroundColor: '#17004a97',
        borderRadius: 15,
    },
})