import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import auth from '../Services/firebaseAuth'
import { Avatar } from 'react-native-paper';

const ProfileCard = () => {

    const user = auth.currentUser;

    return (
        <View style={styles.container}>
            {/* Avatar and others */}
            <View style={styles.AvatarAndOtherContainer}>
                {/* Avatar */}
                <View>
                    <Image
                        source={{ uri: user?.photoURL }}
                        style={{ width: 80, height: 80, borderWidth: 2, borderColor: '#FFF', borderRadius: 15 }} />
                </View>

                {/* Name & email ID */}
                <View>
                    <Text numberOfLines={2} style={styles.nameText}>{user?.displayName}</Text>
                    <Text numberOfLines={1} style={styles.emailText}>{user?.email}</Text>
                </View>
            </View>

            {/* Data */}
            <View style={styles.dataContainer}>
                <View style={[styles.dataAllPapers ,{  borderTopLeftRadius: 15, borderBottomLeftRadius: 15, borderRightWidth: 0.5, borderRightColor: 'grey' }]}>
                    <Text style={{ color: 'grey' }}>All Papers</Text>
                    <Text style={{color:'#FFF'}}>0</Text>
                </View>

                <View style={[styles.dataFavPapers ,{ borderTopRightRadius: 15, borderBottomRightRadius: 15, borderLeftWidth: 0.5, borderLeftColor: 'grey' }]}>
                    <Text style={{ color: 'grey' }}>Favorite Papers</Text>
                    <Text style={{color:'#FFF'}}>0</Text>
                </View>
            </View>
        </View>
    );
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0b0023',
        paddingHorizontal: '4%',
        paddingVertical: '2.5%',
    },
    AvatarAndOtherContainer: {
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: '2.5%'
    },
    nameText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 700
    },
    emailText: {
        color: 'grey',
        fontSize: 14,
    },
    dataContainer: {
        flexDirection: 'row',
        paddingTop: '1%'
    },
    dataAllPapers: {
        backgroundColor: '#17004a97',
        height: 80,
        width: '50%',
        alignItems:'center',
        justifyContent:'center',
    },
    dataFavPapers: {
        backgroundColor: '#17004a97',
        height: 80,
        width: '50%',
        alignItems:'center',
        justifyContent:'center',
    }
})