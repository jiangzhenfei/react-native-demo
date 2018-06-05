import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'

let a = 1;
export default class HomeDetailScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state;
		return {
			title: params ? params.otherParam : 'A Nested Details Screen',
			// headerLeft: (//会覆盖下面对于headerTintColor的设置
			// 	<Button
			// 		  onPress={() => alert('This is a button!')}
			// 		  title="Info"
			// 		  color="blue"
			// 	/>
			// ),
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: 'yellow',
			headerTitleStyle: {
				fontWeight: 'bold',
				color:'blue'
			},
		}
	}
	constructor (props){
		super(props)
		this.addA()
	}
	addA () {
		a = a + 1;
		this.a = a;
	}
	render() {
		const { navigation } = this.props;
    	const itemId = navigation.getParam( 'itemId', 'NO-ID' );
    	const otherParam = navigation.getParam( 'otherParam', 'some default value' );
		return (
			<View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
				<Text>Home Detail</Text>
				<Text>{this.a}</Text>
				<Button
					title="Go to Details 100"
					onPress={ () => this.props.navigation.navigate( 'Home' ) }
				/>
				<Button
					title="Update the title"
					onPress={ () => this.props.navigation.setParams( {otherParam: 'Updated!'} ) }
				/>
				<Button
					title="Go to Three"
					onPress={ () => this.props.navigation.navigate( 'MyModal' ) }
				/>
			</View>
		);
	}
}