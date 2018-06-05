import { createStackNavigator } from 'react-navigation';

import GroundScreen from '../view/Ground/GroundScreen'

const GroundStack = createStackNavigator(
	{
		Ground:GroundScreen
	}
);
export default GroundStack;