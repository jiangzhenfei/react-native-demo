/**
 * 主要实现下拉刷新，上拉加载
 */
import React from 'react';
import { View, Text, StyleSheet, FlatList,ActivityIndicator} from 'react-native';
import { ListItem, List ,PricingCard } from 'react-native-elements'

export default class GroundScreen extends React.Component {
	state={
		data:[
			
		],
		data2:[
			{
				name: 'AAAAAA',
				avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
				subtitle: 'Vice Chairman'
			},
			{
				name: 'BVBBBBB',
				avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
				subtitle: 'Vice Chairman'
			},
		],
		refreshing:false,
		loadMore:false,
		ok:false
	}
	constructor(props){
		super(props)
		this.ok = false;
	}
	//上啦刷新
	_onRefresh(){
		this.setState({
			refreshing:true,
		})
		setTimeout(() => {
			this.setState({
				refreshing:false,
				data:this.state.data
			})
		}, 2000);
	}
	//下拉加载
	_loadMoreData(){
		if(!this.ok){
			this.ok = true;
			return;
		}
		if(this.state.loadMore){
			return;
		}
		alert(1)
		this.setState({
			loadMore:true,
		})
	
		setTimeout(() => {
			this.setState({
				loadMore:false,
				data:this.state.data.concat( this.state.data2 )
			})
		}, 5000);
	}
	componentDidMount(){
		setTimeout(() => {
			this.setState({
				data:[
					{
						name: 'Amy Farha',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
						subtitle: 'Vice President'
					},
					{
						name: 'Chris Jackson',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						subtitle: 'Vice Chairman'
					},
					{
						name: 'Chris Jackson',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						subtitle: 'Vice Chairman'
					},
					{
						name: 'Chris Jackson',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						subtitle: 'Vice Chairman'
					},
					{
						name: 'Chris Jackson',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						subtitle: 'Vice Chairman'
					},
					{
						name: 'Chris Jackson',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						subtitle: 'Vice Chairman'
					},
					{
						name: 'Chris Jackson',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						subtitle: 'Vice Chairman'
					},
					{
						name: 'Chris Jackson',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						subtitle: 'Vice Chairman'
					},
					{
						name: 'Chris Jackson',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						subtitle: 'Vice Chairman'
					},
					{
						name: 'Chris Jackson',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						subtitle: 'Vice Chairman'
					},
					{
						name: 'Chris Jackson',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
						subtitle: 'Vice Chairman'
					},
				]
			})
		}, 2000);
	}
	render() {
		let footCom = (<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<ActivityIndicator  
						animating={true}  
						color='blue'  
						style={{  
							marginTop: 20,  
							width: 60,  
							height: 60,  
						}}  
						size="large" /> 
					</View> );
	  	return (
			<View style={styles.container}>
				<FlatList
					data={ this.state.data }
					onRefresh={ this._onRefresh.bind( this ) }
					refreshing={ this.state.refreshing }
					onEndReachedThreshold={0}
					onEndReached={ this._loadMoreData.bind( this ) }
					ListFooterComponent={ this.state.loadMore? footCom:null }
					keyExtractor={(item,index)=>index.toString()}
					renderItem={({item}) => <ListItem roundAvatar avatar={{uri:item.avatar_url}} key={item.avatar_url} title={item.name}/>}
				/>
      		</View>
	  	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
		borderBottomWidth:2,
		borderBottomColor:'red',
	},
})