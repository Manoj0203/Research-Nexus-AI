import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FlashList } from "@shopify/flash-list";

import auth from '../Services/firebaseAuth';

import AppBar from '../Utils/AppBar';
import SearchBar from '../Utils/SearchBar';

import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = () => {

    const user = auth.currentUser;
    const navi = useNavigation();

    const [search, setSearch] = useState('');

    const DATA = [
        {
            title: "First Item",
        },
        {
            title: "Second Item",
        },

    ];

    const handleSearch = () => {
        console.log(search);
    };

    const renderRecentPaper = ({ item }) => {
        return (
            <View
                style={styles.recentCard}>
                <Text style={{ color: 'white', fontSize: 16 }}>
                    {item.title}
                </Text>
            </View>
        );
    };

    return (
        <>
            <AppBar title={'Home'} />

            {/* Greetings */}
            <View style={{ backgroundColor: '#0b0023', paddingHorizontal: '4%', paddingVertical: '2.5%' }}>
                <Text numberOfLines={2} style={{ color: 'white', fontSize: 22, fontWeight: 700 }}>Hello, {user.displayName ?? 'Researcher'} 👋</Text>
                <Text style={{ color: 'grey', fontSize: 15 }}>What would you like to explore today?</Text>
            </View>

            {/* SearchBar */}
            <SearchBar
                value={search}
                onChangeText={setSearch}
                placeholder='Search your paper or topics'
                onClear={() => setSearch('')}
                onSearch={handleSearch} />

            {/* Upload Paper */}
            <View style={{ paddingHorizontal: '4%', paddingVertical: '2.5%', backgroundColor: '#0b0023' }}>
                <TouchableOpacity activeOpacity={0.8} style={styles.UploadButton} onPress={() => navi.navigate('Upload')} >
                    <View style={styles.iconContainer}>
                        <Feather name="upload-cloud" size={28} color="#FFF" />
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Upload New Paper</Text>
                        <Text style={styles.subtitle}>Upload PDF and let AI analyze it</Text>
                    </View>

                    <Feather name="chevron-right" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>

            {/* Recent paper */}
            <View style={{ paddingHorizontal: '4%', paddingVertical: '2.5%', backgroundColor: '#0b0023', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 700 }}>Recent Papers</Text>
                <TouchableOpacity onPress={() => navi.navigate('Library')}>
                    <Text style={{ color: '#8e64ff', fontSize: 15, }}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#0b0023', flex: 1, justifyContent: 'flex-end' }}>
                <FlashList
                    style={{ backgroundColor: '#0b0023', }}
                    data={DATA.slice(0, 5)}
                    showsVerticalScrollIndicator={true}
                    renderItem={renderRecentPaper}
                />
            </View>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    UploadButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5B2DD8',
        borderRadius: 18,
        paddingHorizontal: 18,
        paddingVertical: 18,
    },
    iconContainer: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 14,
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '700',
    },
    subtitle: {
        color: '#E0D8FF',
        fontSize: 14,
        marginTop: 3,
    },
    recentCard: {
        backgroundColor: '#17004a97',
        padding: 16,
        marginHorizontal: '4%',
        marginVertical: '2%',
        borderRadius: 12,
    }
});