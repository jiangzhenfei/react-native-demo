import { createStackNavigator } from 'react-navigation';

import  ListScreen  from '../view/List/ListScreen'

const ListStack = createStackNavigator(
	{
		ListScreen:ListScreen
	}
);
export default ListStack;