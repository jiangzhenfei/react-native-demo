import React from 'react';
import { View, Text ,Image} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'


const users = [
	{
	   name: 'brynn',
	   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
	},
]
export default class ModalScreen extends React.Component {
	render() {
		return (
			<View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
				<Text style={ { fontSize: 30 } }>This is a modal!</Text>
				<Button
					onPress={ () => this.props.navigation.goBack() }
					title="Dismiss"
				/>
				<Card title="CARD WITH DIVIDER">
					{
						users.map( ( u, i ) => {
							return (
								<View key={ i }>
									<Image
										resizeMode="cover"
										source={ { uri: u.avatar } }
									/>
									<Text>{ u.name }</Text>
								</View>
							);
						} )
					}
				</Card>
				<Card containerStyle={ { padding: 0 } } >
					{
						users.map((u, i) => {
							return (
								<ListItem
								key={ i }
								roundAvatar
								title={ u.name }
								avatar={ { uri:u.avatar } }
								/>
							);
						})
					}
				</Card>
				<Card
					title='HELLO WORLD'>
					<Text style={ { marginBottom: 10 } }>
						The idea with React Native Elements is more about component structure than actual design.
					</Text>
					<Button
						icon={ { name: 'code' } }
						backgroundColor='#03A9F4'
						buttonStyle={ { borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 } }
						title='VIEW NOW' 
					/>
				</Card>
			</View>
		);
	}
}
