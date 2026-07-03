import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Switch,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppBarPage from '../Utils/AppBarPage';
import LogoutButton from '../Utils/LogoutButton';

export default function SettingsScreen() {
    const [twoFactor, setTwoFactor] = useState(false);

    const MenuItem = ({
        icon,
        iconType = 'material',
        title,
        subtitle,
        rightText,
        switchItem,
    }) => {
        const LeftIcon =
            iconType === 'fontawesome' ? (
                <FontAwesome5 name={icon} size={18} color="#CFCFFF" />
            ) : (
                <Icon name={icon} size={22} color="#CFCFFF" />
            );

        return (
            <TouchableOpacity style={styles.item} activeOpacity={title=='Authentication' || title == 'Two-Factor Authentication' ? 1 : 0.3}>
                <View style={styles.left}>
                    <View style={styles.iconBox}>{LeftIcon}</View>

                    <View>
                        <Text style={styles.itemTitle}>{title}</Text>
                        <Text style={styles.itemSubtitle}>{subtitle}</Text>
                    </View>
                </View>

                {switchItem ? (
                    <Switch
                        value={twoFactor}
                        onValueChange={setTwoFactor}
                        trackColor={{ false: '#50505D', true: '#8e64ff' }}
                        thumbColor="#FFF"
                    />
                ) : (
                    <View style={styles.right}>
                        {rightText && (
                            <Text style={styles.rightText}>{rightText}</Text>
                        )}
                        {title != 'Authentication' && (
                            <Icon
                                name="chevron-right"
                                color="#FFF"
                                size={24}
                            />
                        )}

                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <>
            <AppBarPage title='Settings' />
            <ScrollView style={styles.container}>


                {/* Upgrade */}

                <TouchableOpacity style={styles.upgrade}>
                    <View style={styles.left}>
                        <Icon
                            name="crown"
                            color="#FFD54F"
                            size={20}
                        />

                        <View style={{ marginLeft: 12 }}>
                            <Text style={styles.itemTitle}>
                                Upgrade to Pro
                            </Text>

                            <Text style={styles.itemSubtitle}>
                                Unlock unlimited AI features, larger uploads
                                and advanced insights.
                            </Text>
                        </View>
                    </View>

                    <Icon
                        name="chevron-right"
                        size={24}
                        color="#FFF"
                    />
                </TouchableOpacity>

                {/* Account */}

                <Text style={styles.section}>Account & Security</Text>

                <View style={styles.card}>
                    <MenuItem
                        icon="google"
                        title="Authentication"
                        subtitle="Signed in with Google"
                    />

                    <MenuItem
                        icon="account-outline"
                        title="Account Information"
                        subtitle="View and edit your account details"
                    />

                    <MenuItem
                        icon="shield-check-outline"
                        title="Two-Factor Authentication"
                        subtitle="Add an extra layer of security"
                        switchItem
                    />
                </View>

                {/* Preferences

                <Text style={styles.section}>App Preferences</Text>

                <View style={styles.card}>
                    <MenuItem
                        icon="theme-light-dark"
                        title="Appearance"
                        subtitle="Choose theme, font size and more"
                        rightText="System"
                    />

                    <MenuItem
                        icon="translate"
                        title="Language"
                        subtitle="Select your preferred language"
                        rightText="English"
                    />

                    <MenuItem
                        icon="robot-outline"
                        title="AI Model Preference"
                        subtitle="Choose your preferred AI model"
                        rightText="Gemini 1.5"
                    />

                    <MenuItem
                        icon="database-outline"
                        title="Data & Storage"
                        subtitle="Manage offline data and storage usage"
                    />

                    <MenuItem
                        icon="bell-outline"
                        title="Notifications"
                        subtitle="Manage push notifications"
                    />
                </View> */}


                {/* Logout */}

                <View style={styles.logoutView}>
                    <LogoutButton />
                </View>

                <View style={{ height: 30 }} />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b0023',
        paddingHorizontal: '4%',
    },

    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 18,
    },

    logo: {
        width: 62,
        height: 62,
        borderRadius: 16,
    },

    appName: {
        color: '#fff',
        fontSize: 19,
        fontWeight: '700',
    },

    version: {
        color: '#8B92A6',
        marginTop: 4,
    },

    badge: {
        marginTop: 8,
        alignSelf: 'flex-start',
        backgroundColor: '#5B4DFF',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8,
    },

    badgeText: {
        color: '#fff',
        fontSize: 12,
    },

    upgrade: {
        backgroundColor: '#17004a97',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    section: {
        color: '#B8BED0',
        fontWeight: '700',
        marginTop: 22,
        marginBottom: 12,
    },

    card: {
        backgroundColor: '#17004a97',
        borderRadius: 16,
        overflow: 'hidden',
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomColor: '#232942',
        borderBottomWidth: 1,
    },

    left: {
        flexDirection: 'row',
        flex: 1,
    },

    iconBox: {
        width: 38,
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemTitle: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15,
    },

    itemSubtitle: {
        color: 'grey',
        marginTop: 3,
        fontSize: 12,
        width: 220,
    },

    right: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rightText: {
        color: '#FFF',
        marginRight: 8,
    },

    logout: {
        marginTop: 22,
        borderWidth: 1,
        borderColor: '#5D2830',
        borderRadius: 14,
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    logoutText: {
        color: '#FF5757',
        marginLeft: 8,
        fontWeight: '700',
    },
    logoutView: {
		flex: 1,
		backgroundColor: '#0b0023',
		alignItems: 'center',
		paddingTop: 20,
	}
});