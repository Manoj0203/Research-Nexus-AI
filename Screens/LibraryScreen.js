import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SegmentedButton from '../Utils/SegmentedButtons';

import AppBar from '../Utils/AppBar'

const LibraryScreen = () => {

	const [catvalue, setCatValue] = React.useState('All Papers');

	return (
		<>
			<AppBar title={'My Library'} />

			{/* Categories */}
			<View style={{ paddingHorizontal: '4%', backgroundColor: '#0b0023', paddingVertical: '2.5%' }}>
				<SegmentedButton
					options={[
						'All Papers',
						'Favorites',
					]}
					selected={catvalue}
					onChange={setCatValue}
				/>
			</View>
		</>
	)
}

export default LibraryScreen

const styles = StyleSheet.create({})