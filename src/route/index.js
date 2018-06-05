import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RootStack from './HomeRoute'
import SetingStackScreen from './SettingsRoute'
import GroundStack from './GroundRoute'
import ListStack from './ListRoute'
import OtherStack from './OtherRoute'

const Root =  createBottomTabNavigator(
	{
		Home:       RootStack,
		Settings:   SetingStackScreen,
		Ground:     GroundStack,
		ListScreen: ListStack,
		OtherScreen: OtherStack
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = `ios-information-circle${focused ? '' : '-outline'}`;
				} else if (routeName === 'Settings') {
					iconName = `ios-options${focused ? '' : '-outline'}`;
				}else if(routeName === 'Ground'){
					iconName = `ios-add-circle${focused ? '' : '-outline'}`;
				}else if(routeName === 'ListScreen'){
					iconName = `ios-appstore${focused ? '' : '-outline'}`;
				}else if(routeName === 'OtherScreen'){
					iconName = `ios-cog${focused ? '' : '-outline'}`;
				}
		
				// You can return any component that you like here! We usually use an
				// icon component from react-native-vector-icons
				return <Ionicons name={iconName} size={25} color={tintColor} />;
			},
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		},
	}
);

export default Root;