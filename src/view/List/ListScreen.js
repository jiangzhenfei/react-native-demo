import React ,{Component} from 'react';
import { View, Text,ScrollView ,WebView, Dimensions,StyleSheet} from 'react-native';
import { ListItem, List ,PricingCard ,Button} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelfEChart from '../../components/chart/chart'


export default class ListScreen extends React.Component {
	componentDidMount(){
        /**
         * 连续不间断刷新图标demo
         */
        setInterval(()=>{
            let data = [5, 20, 36, 10, 10, 20].map((v)=>{
                return Math.random()*v
            })
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: data
                }]
            };
            /**普通图表刷新通过改变state内部的option实现，缺点就是组件不断更新，导致图表组件重头开始渲染，没有连贯效果
             * 在chartComponent里面封装的setNewOption方法，
             * 目的是为了调用myChart.setOption(option) 
             * 达到不抖屏不更新state刷新图表
             * */
            this.refs.charts.setNewOption(option)
        },2000)  
    }
	render() {
		var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

		return (
			<ScrollView>
			<View style={ { flex: 1, justifyContent: 'center', alignItems: 'center'} }>
				<Text>ListScreen!</Text>
				<SelfEChart 
					ref="charts"
					option={option}
				/>
			</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({  
	container: {  
	  flex: 1,  
	  backgroundColor: '#f2f2f2',  
	  paddingTop:20,  
	},  
  }); 