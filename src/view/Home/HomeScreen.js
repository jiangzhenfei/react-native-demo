import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';

import Echarts from 'native-echarts';


/**
 * Echarts 使用
 * option (object)：图表的相关配置和数据。详见文档：ECharts Documentation
 * width (number)：图表的宽度，默认值是外部容器的宽度。
 * height (number) ：图表的高度，默认值是400。
 */
class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Home',
		headerRight: (
			<Button
			  	onPress={() => alert('This is a button!')}
			  	title="Info"
			  	color="red"
			/>
		),
		headerLeft: (
			<Button
			  	onPress={() => alert('This is a button!')}
			  	title="Info"
			  	color="green"
			/>
		),
	}
	render() {
		const option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {//每个数据的类别
				show:true,
				orient: 'vertical',
				x: 'left',
				data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			},
			series: [
				{
					name:'访问来源',
					type:'pie',
					radius: ['40%', '50%'],//空心圆的内外半径
					avoidLabelOverlap: false,
					label: {
						normal: {//图形的提示正常情况下是否显示
							show: false,
							position: 'center'
						},
						emphasis: {//图形的提示点击情况下是否显示
							show: true,
							textStyle: {
								fontSize: '20',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data:[
						{value:335, name:'直接访问'},
						{value:310, name:'邮件营销'},
						{value:234, name:'联盟广告'},
						{value:135, name:'视频广告'},
						{value:1548, name:'搜索引擎'}
					]
				}
			]
		};
		let obj = {
			data:[
				[1527640092.822, "1.3023341880559913"],
				[1527640452.822, "1.0256037199581183"],
				[1527640812.822, "1.1533933155556044"],
				[1527641172.822, "0.9896119534727811"],
				[1527641532.822, "1.1468106858327096"],
				[1527641892.822, "1.0468088097223296"],
				[1527642252.822, "1.0893894093058203"],
				[1527642612.822, "1.1097389295830202"],
				[1527642972.822, "1.07881291902787"],
				[1527643332.822, "1.043972619861001"],
				[1527643692.822, "0.9854553805553226"]
			],
			title:'CPU监控信息',
			text:'使用（%）',
			valueSuffix:'%',
			name:'CPU'
		}
		return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Text>{this.props.user.name}</Text>
			<Button
				title="Go to Details 86"
				onPress={() => this.props.navigation.navigate('Details',{
					itemId: 86,
					otherParam: 'anything you want here',
				})}
			/>
			<Button
				title="modal"
				onPress={() => this.props.navigation.navigate('MyModal')}
			/>
			<Button
				title="Go to Settings"
				onPress={() => this.props.navigation.navigate('Settings')}
			/>
			<Echarts option={option} height={300} />
		</View>
		);
	}
}

//将该组件的props和全局的state对应起来
const mapStateToProps = state => ({
	user: state.test
})

export default connect(mapStateToProps)(HomeScreen);