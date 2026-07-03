import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppBarPage from '../Utils/AppBarPage';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Goal } from 'lucide-react-native';
import { Users2 } from 'lucide-react-native';

const AboutScreen = () => {

    const technologies = [
        'AI & LLMs',
        'NLP',
        'RAG',
        'Vector Search',
        'Knowledge Graphs',
        'Machine Learning',
        'Firebase',
        'React Native',
        'FastAPI',
    ];

    return (
        <>
            <AppBarPage title='About' />

            <ScrollView style={{ backgroundColor: '#0b0023', paddingBottom: '2.5%' }}>
                {/* Image */}
                <View style={{ backgroundColor: '#0b0023', alignItems: 'center', paddingVertical: '2.5%' }}>
                    <Image
                        source={require('../Assets/Images/AIavatar.png')}
                        style={{ width: 135, height: 135, backgroundColor: '#0b0023' }} />
                    <Text style={{ color: '#FFF', fontSize: 21 }}>Research <Text style={{ color: '#8e64ff', fontSize: 21 }}>Nexus AI</Text></Text>
                    <Text style={{ color: 'grey' }}>AI Research Paper Companion</Text>
                    <Text style={{ backgroundColor: '#17004ad2', color: '#8e64ff', fontSize: 13, borderRadius: 8, padding: 6, marginTop: 5 }}>Version 1.0.0</Text>
                </View>

                {/* About the App */}
                <View style={styles.containers}>
                    <View style={[styles.partContainer, { paddingBottom: 0 }]}>
                        <View style={{ flexDirection: 'row', gap: 10, paddingVertical: '2.5%', paddingHorizontal: '4%' }}>
                            <Feather name="bookmark" size={24} color="#8e64ff" />
                            <Text style={{ color: '#8e64ff', fontSize: 17 }}>About the App</Text>
                        </View>
                        <Text style={{ color: '#FFF', fontSize: 13, paddingHorizontal: '4%' }}>Research Nexus AI is your intelligent academic research assistant that helps you to understant, organize, and derive insights from research papers efficiency using AI.</Text>

                        <View style={[styles.tipRow, { marginTop: 10 }]}>
                            <Icon name="check" size={20} color="#4FC3F7" />
                            <Text style={{ color: '#FFF', fontSize: 13 }}>Upload, read and chat with research papers</Text>
                        </View>

                        <View style={styles.tipRow}>
                            <Icon name="check" size={20} color="#4FC3F7" />
                            <Text style={{ color: '#FFF', fontSize: 13 }}>Generate summaries and extract key insights</Text>
                        </View>

                        <View style={styles.tipRow}>
                            <Icon name="check" size={20} color="#4FC3F7" />
                            <Text style={{ color: '#FFF', fontSize: 13 }}>Discover connection with knowledge graphs</Text>
                        </View>

                        <View style={styles.tipRow}>
                            <Icon name="check" size={20} color="#4FC3F7" />
                            <Text style={{ color: '#FFF', fontSize: 13 }}>Create citation and literature reviews</Text>
                        </View>
                    </View>
                </View>

                {/* Our Mission */}
                <View style={styles.containers}>
                    <View style={styles.partContainer}>
                        <View style={{ flexDirection: 'row', gap: 10, paddingVertical: '2.5%', paddingHorizontal: '4%', alignItems: 'center' }}>
                            <Goal size={24} color={'#8e64ff'} />
                            <Text style={{ color: '#8e64ff', fontSize: 17 }}>Our Mission</Text>
                        </View>
                        <Text style={{ color: '#FFF', fontSize: 13, paddingHorizontal: '4%' }}>To empower researchers, student and academics by transforming complex research papers into structured knowledge and saving hours of reading and analysis.</Text>
                    </View>
                </View>

                {/* Made for researchers */}
                <View style={styles.containers}>
                    <View style={styles.partContainer}>
                        <View style={{ flexDirection: 'row', gap: 10, paddingVertical: '2.5%', paddingHorizontal: '4%', alignItems: 'center' }}>
                            <Users2 size={24} color={'#8e64ff'} />
                            <Text style={{ color: '#8e64ff', fontSize: 17 }}>Made for researchers</Text>
                        </View>
                        <Text style={{ color: '#FFF', fontSize: 13, paddingHorizontal: '4%' }}>Build with 💖 for global research community to accelerate discovery and innovation.</Text>
                    </View>
                </View>

                {/* Tech used */}
                <View style={styles.containers}>
                    <View style={styles.partContainer}>
                        <View style={{ flexDirection: 'row', gap: 10, paddingVertical: '2.5%', paddingHorizontal: '4%', alignItems: 'center' }}>
                            <Octicons name="terminal" size={24} color="#8e64ff" />
                            {/* <Icon name="terminal" size={22} color="#8e64ff" /> */}
                            <Text style={{ color: '#8e64ff', fontSize: 17 }}>Technology Behind</Text>
                        </View>
                        <View style={styles.tagsContainer}>
                            {technologies.map((item) => (
                                <View key={item} style={styles.tag}>
                                    <Text style={styles.tagText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    containers: {
        backgroundColor: '#0b0023',
        paddingHorizontal: '4%',
        paddingVertical: '2.5%',
    },
    partContainer: {
        backgroundColor: '#17004a97',
        borderRadius: 15,
        paddingBottom: '2.5%'
    },
    tipRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
        paddingHorizontal: '4%',
        gap: 5,
        marginTop: -3,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: '#8d64ff4c',
        paddingHorizontal: '2.5%',
        paddingVertical: '2%',
        borderRadius: 10,
        marginHorizontal: '1.5%',
        marginBottom: '2%',
    },

    tagText: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: '500',
    },
})