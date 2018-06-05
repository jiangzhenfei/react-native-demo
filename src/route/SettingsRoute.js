import { createStackNavigator } from 'react-navigation';

//com
import SettingsScreen from '../view/Settings/SettingsScreen'
import HomeDetailScreen from '../view/Home/HomeDetailScreen'

const SetingStackScreen = createStackNavigator(
	{
		Setings:SettingsScreen,
		Details:HomeDetailScreen
	}
);

export default SetingStackScreen