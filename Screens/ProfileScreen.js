import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppBar from '../Utils/AppBar';
import ProfileCard from '../Utils/ProfileCard';

const ProfileScreen = () => {
	return (
		<>
			<AppBar title={'Profile'} />

			<ProfileCard />

		</>
	);
}

export default ProfileScreen

const styles = StyleSheet.create({})