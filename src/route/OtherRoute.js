import { createStackNavigator } from 'react-navigation';

import OtherGreen from '../view/Other/OtherScreen'

const OtherStack = createStackNavigator(
	{
		OtherGreen:OtherGreen
	}
);
export default OtherStack;