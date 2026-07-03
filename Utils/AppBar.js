import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';

const AppBar = ({
    title,
    style
}) => {

    const navi = useNavigation();

    const renderRightIocn = () => {
        switch (title) {
            case 'Home':
                return (
                    <TouchableOpacity>
                        <Feather name={'bell'} size={24} color="white" />
                    </TouchableOpacity>)

            case 'My Library':
                return (
                    <TouchableOpacity>
                        <Feather name="search" size={24} color="white" />
                    </TouchableOpacity>
                )

            case 'Profile':
                return (
                    <TouchableOpacity onPress={() => navi.navigate('Settings')} >
                        <Feather name="settings" size={24} color="white" />
                    </TouchableOpacity>
                )

            default:
                return null
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 22 }}>{title}</Text>
            {renderRightIocn()}
        </View>
    )
}

export default AppBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0b0023',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        paddingVertical: '2.5%',
        flexDirection: 'row',
        alignItems: 'center'
    }
})