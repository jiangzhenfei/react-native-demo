/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React ,{ Component } from 'react';
import { YellowBox } from 'react-native';
import Root from './src/route'

import { Provider } from 'react-redux';
import store from './src/redux/store';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class App extends Component{
	render () {
		return (	
			<Provider store={store}>
				<Root />
			</Provider>
		)
	}
}

export default  App;



