import { createStackNavigator } from 'react-navigation';

//com
import  HomeScreen  from '../view/Home/HomeScreen.js'
import 	HomeDetailScreen  from '../view/Home/HomeDetailScreen'
import  ModalScreen from '../view/Home/HomeModalScreen'

const HomeStack = createStackNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		Details:{
			screen: HomeDetailScreen
		}
	},
	{
		/* 跨屏共享的header属性 */
		/*navigationOptions: {
			headerStyle: {
			  backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
			  fontWeight: 'bold',
			},
		},*/
	}
);

const RootStack = createStackNavigator(
	{
		Main: {
			screen: HomeStack,
		},
		MyModal: {
			screen: ModalScreen,
		},
	},
	{
		mode: 'modal',
		headerMode: 'none',
	}
);

export default RootStack;