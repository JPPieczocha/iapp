import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './src/constants/colors'
import Tabs from './src/navigation/Tabs'
import MovieFocus from './src/pages/movieFocus/MovieFocus';
import VideoPlayer from './src/pages/videoPlayer/VideoPlayer';
import MoviePlayer from './src/pages/moviePlayer/MoviePlayer'

export default function App() {

	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator>
					<Stack.Screen name="Homee" component={Tabs} options={{headerShown:false}}/>
					<Stack.Screen name="MovieFocus" component={MovieFocus} options={{headerShown:false}}/>
					<Stack.Screen name="VideoPlayer" component={VideoPlayer} options={{headerShown:false}}/>
					<Stack.Screen name="MoviePlayer" component={MoviePlayer} options={{headerShown:false}}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}