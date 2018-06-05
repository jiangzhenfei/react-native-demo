import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Rating,SearchBar,Slider,SocialIcon} from 'react-native-elements'
import SelfEChart from '../../components/chart/chart'

export default class OtherGreen extends React.Component {
	state={
		value:3,
		data:[120, 132, 101, 134, 90, 230, 210],
		xAxis:[10, 10, 16, 30]
	}
	ratingCompleted(rating) {
		console.log("Rating is: " + rating)
	}
	change(){
		console.log('text')
	}
	addNewData(){
		var value = this.state.value+1
		this.setState({
			value:value
		})
	}
	componentDidMount(){
        /**
         * 连续不间断刷新图标demo
         */
		let x = 7
		let xAxis = [1,2,3,4,5,6,7]
		let data = [120,132, 101, 134, 90, 230, 210]
        setInterval(()=>{
			x = x+1;
			xAxis.shift()
			xAxis.push(x)
			data.shift()
			data.push(Math.random() * 300 )
			const option = {
				title: {
					text: '堆叠区域图'
				},
				tooltip : {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985'
						}
					},
					formatter: "{a} <br/>{b}: {c}"
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis : [
					{
						type : 'category',
						boundaryGap : false,
						data : xAxis
					}
				],
				yAxis : [
					{
						type : 'value'
					}
				],
				series : [
					{
						name:'邮件营销',
						type:'line',
						stack: '总量',
						smooth:true,
						areaStyle: {normal: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0, color: 'rgb(0,155,219)' // 0% 处的颜色
								}, {
									offset: 1, color: 'rgba(0,155,219, 0)'// 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}
						}},
						data:data
					},
				]
			};

			
            this.refs.charts.setNewOption(option)
        },2000)  
    }
	render() {
		const option = {
			title: {
				text: '堆叠区域图'
			},
			tooltip : {
				//trigger: 'item',
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				},
				formatter: "{a} <br/>{b}: {c}"
			},
			
			//工具栏，参考 http://echarts.baidu.com/examples/editor.html?c=area-stack
			// toolbox: {
			// 	feature: {
			// 		saveAsImage: {}
			// 	}
			// },
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					boundaryGap : false,
					data : [1,2,3,4,5,6,7]
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'邮件营销',
					type:'line',
					stack: '总量',
					smooth:true,
					areaStyle: {normal: {
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: 'rgb(0,155,219)' // 0% 处的颜色
							}, {
								offset: 1, color: 'rgba(0,155,219, 0)'// 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}},
					data:[120, 132, 101, 134, 90, 230, 210]
				},
			]
		};
		
		return (
			<ScrollView>
			<View style={ { flex: 1, justifyContent: 'center', alignItems: 'center'} }>
				<Text>OtherGreen!</Text>
				<Rating
					showRating
					onFinishRating={this.ratingCompleted}
					style={{ paddingVertical: 5}}
				/>
				{/*只读*/}
				<Rating
					showRating
					type="star"
					fractions={1}
					startingValue={3.6}
					readonly
					imageSize={40}
					onFinishRating={this.ratingCompleted}
					style={{ paddingVertical: 10 }}
				/>
				<Rating
					type="heart"
					ratingCount={3}
					fractions={2}
					startingValue={1.57}
					imageSize={40}
					onFinishRating={this.ratingCompleted}
					showRating
					style={{ paddingVertical: 10 }}
				/>
				<SearchBar
					containerStyle={{width:'90%'}}
					onChangeText={ this.change }
					onClearText={ this.change }
					placeholder='Type Here...' 
				/>
				<SearchBar
					containerStyle={{width:'90%'}}
					lightTheme
					round
					onChangeText={ this.change }
					onClearText={ this.change }
					placeholder='Type Here...'
				/>
				<View style={{width:'100%'}}>
					<Slider
						minimumTrackTintColor='red'
						maximumTrackTintColor='green'
						maximumValue={10}
						value={this.state.value}
						onValueChange={(value) => this.setState({value})} />
					<Text>Value: {this.state.value}</Text>
				</View>
				<SocialIcon
					type='twitter'
				/>
				<SocialIcon
					title='Sign In With Facebook'
					button
					type='facebook'
				/>
				<SocialIcon
					button
					light
					type='instagram'
				/>
				<SelfEChart 
					ref="charts"
					option={option}
				/>
			</View>
			</ScrollView>
		);
	}
}