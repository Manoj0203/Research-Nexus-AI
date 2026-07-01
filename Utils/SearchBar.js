import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function SearchBar({
    value,
    onChangeText,
    placeholder = 'Search...',
    onSearch,
    onClear,
}) {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Feather name="search" size={20} color="#888" />

                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#888"
                    value={value}
                    onChangeText={onChangeText}
                    returnKeyType="search"
                    onSubmitEditing={onSearch}
                />

                {value ? (
                    <TouchableOpacity onPress={onClear}>
                        <Feather name="x" size={20} color="#888" />
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0b0023',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        paddingVertical: '2.5%',
        alignItems: 'center',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        marginHorizontal: 10,
        color: '#FFF',
        fontSize: 16,

    },
});