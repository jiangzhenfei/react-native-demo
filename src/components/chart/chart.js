import React ,{Component} from 'react';
import { 
    View, 
    Text,
    ScrollView ,
    WebView, 
    Dimensions,
    StyleSheet,
    Platform
} from 'react-native';

/*获取设备的屏幕宽度和高度*/
const {width, height} = Dimensions.get('window');  

function toString(obj) {
	let result = JSON.stringify(obj, function(key, val) {
        if (typeof val === 'function') {
            return `~--demo--~${val}~--demo--~`;
        }
        return val;
    });
    do {
        result = result.replace('\"~--demo--~', '').replace('~--demo--~\"', '').replace(/\\n/g, '').replace(/\\\"/g,"\"");//最后一个replace将release模式中莫名生成的\"转换成"
    } while (result.indexOf('~--demo--~') >= 0);
    return result;
}

/*在WebView加载外部html后执行的js，主要是初始化echart图标*/
function renderChart(props) {
	const height = `${props.height || 400}px`;
	const width = props.width ? `${props.width}px` : 'auto';
	return `
	    document.getElementById('main').style.height = "${height}";
	    document.getElementById('main').style.width = "${width}";
	    var myChart = echarts.init(document.getElementById('main'));
	    myChart.setOption(${toString(props.option)});
	    window.document.addEventListener('message', function(e) {
		    var option = JSON.parse(e.data);
		    myChart.setOption(option);
	    });
	`
}

/**
 * 通过WebView封装react-native不支持的插件，本次封装echarts
 * 
 * 该组件需要的props
 * option  必填，为ECharts配置属性option，详细配置参考官网EChartshttp://echarts.baidu.com/option.html#title
 * width   不必填，为图表的宽度
 * height  不必填，为图表的高度
 * 
 * 
 */
export default class SelfEChart extends Component {  
	constructor(props) {
		super(props);
		this.setNewOption = this.setNewOption.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.option !== this.props.option) {
		  	this.refs.chart.reload();
		}
	}
	setNewOption(option) {
		this.refs.chart.postMessage(JSON.stringify(option));
	}
	render() {
		/**在安卓下加载的资源跟ios不同，需要做兼容处理，
		 * 就是将当下的chart.html拷贝到android/app/src/main/assets
		 */
        const source = (Platform.OS == 'ios') ? require('./chart.html') : { uri: 'file:///android_asset/chart.html' }  
		return (  
			<View style={{width:this.props.width || width,flex: 1, height: this.props.height || 400,}}>  
				<WebView  
					ref="chart"
					scrollEnabled = {false}
					style={{
						height: this.props.height || 400,
						backgroundColor: this.props.backgroundColor || 'transparent'
					}}  
					source={source} //加载的html资源 
					scalesPageToFit={Platform.OS !== 'ios'}
					injectedJavaScript = {renderChart(this.props)} //在html内执行js代码，必须是字符串
				/>  
			</View>  
		);  
	}  
}  