import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

const AppBarPage = ({
    title = 'Title'
}) => {

    const navi = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navi.goBack()} style={styles.iconButton}>
                <Icon name="arrow-left" size={24} color="#FFF" />
            </TouchableOpacity>

            <Text style={styles.title}>{title}</Text>
            <View style={styles.placeholder} />
        </SafeAreaView>
    )
}

export default AppBarPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0b0023',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        paddingVertical: '2.5%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconButton: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        flex: 1,
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
    },

    placeholder: {
        width: 40,
    },
})