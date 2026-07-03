import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import AppBar from '../Utils/AppBar';
import ProfileCard from '../Utils/ProfileCard';
import LogoutButton from '../Utils/LogoutButton';

const ProfileScreen = () => {

	const navi = useNavigation();

	return (
		<>
			<AppBar title={'Profile'} />

			<ProfileCard />

			{/* Quick Settings and Other Options */}
			<View style={styles.dataContainer}>
				<View style={{ backgroundColor: '#17004a97', borderRadius: 15, }}>
					<TouchableOpacity onPress={() => navi.navigate('Library')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
						<View style={{ paddingHorizontal: '4%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
							<FontAwesome6 name="file-pdf" size={19} color="#d6d6d6" />
							<Text style={{ color: '#FFF', fontSize: 15 }}>My Paper</Text>
						</View>
						<Feather name="chevron-right" size={24} color="#FFF" />
					</TouchableOpacity>

					<Divider style={{ backgroundColor: 'grey' }} />

					<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
						<View style={{ paddingHorizontal: '4%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
							<Feather name="settings" size={22} color="#d6d6d6" />
							<Text style={{ color: '#FFF', fontSize: 15 }}>Settings</Text>
						</View>
						<Feather name="chevron-right" size={24} color="#FFF" />
					</TouchableOpacity>

					<Divider style={{ backgroundColor: 'grey' }} />

					<TouchableOpacity onPress={() => navi.navigate('HelpandSupport')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
						<View style={{ paddingHorizontal: '4%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
							<Feather name="help-circle" size={24} color="#d6d6d6" />
							<Text style={{ color: '#FFF', fontSize: 15 }}>Help & Support</Text>
						</View>
						<Feather name="chevron-right" size={24} color="#FFF" />
					</TouchableOpacity>

					<Divider style={{ backgroundColor: 'grey' }} />

					<TouchableOpacity onPress={() => navi.navigate('About')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '2.5%' }}>
						<View style={{ paddingHorizontal: '4%', paddingVertical: '3.5%', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
							<Feather name="info" size={24} color="#d6d6d6" />
							<Text style={{ color: '#FFF', fontSize: 15 }}>About</Text>
						</View>
						<Feather name="chevron-right" size={24} color="#FFF" />
					</TouchableOpacity>

				</View>
			</View>

			{/* LOGOUT */}
			<View style={styles.logoutView}>
				<LogoutButton />
			</View>

		</>
	);
}

export default ProfileScreen

const styles = StyleSheet.create({
	dataContainer: {
		backgroundColor: '#0b0023',
		paddingVertical: '2.5%',
		paddingHorizontal: '4%',
	},
	logoutView: {
		flex: 1,
		backgroundColor: '#0b0023',
		alignItems: 'center',
		paddingHorizontal: '4%',
		paddingTop: 15,
	}
})