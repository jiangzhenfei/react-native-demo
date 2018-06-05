import React from 'react';
import { View, Text } from 'react-native';
import { Button ,CheckBox ,FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

import { connect } from 'react-redux';
import { increase, decrease, reset } from '../../redux/actions';
import Validator from '../../utils/Validator'

class SettingsScreen extends React.Component {
	state = {
		checked:true,
		name:'',
		phone:''
	}
	change (){
		this.setState({
			checked:!this.state.checked
		})
	}
	_onPressReset() {
		this.props.dispatch(reset());
		//改变name之后也会触发homeScreen的该属性修改
		this.props.dispatch({type: 'CHANGENAME' });
	}
	
	_onPressInc() {
		this.props.dispatch(increase());
	}
	
	_onPressDec() {
		this.props.dispatch(decrease());
	}
	//添加验证函数
	_validator(){
		var validator = new Validator()
    	validator.add( this.state.name,[
			{ required:true, errorMsg:'名字不能为空' },
			{ minLength:3, errorMsg:'名字最小长度为3' },
			{ maxLength:6, errorMsg:'名字最长度为6' },
			
		] )
		validator.add( this.state.phone,[
			{ required:true, errorMsg:'电话不能为空' },
			{ pattern:'^1[3|5|8][0-9]+$', errorMsg:'填写正确的电话' },	
		] )
		return validator.start()
	}
	_submit(){
		if(err = this._validator()){
			alert(err)
		}else{
			//TODO
		}
		
	}
	render() {
	  return (
		<View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
			<Text>Settings!</Text>
			{/* <Button
				title="Go to Details settingd 86"
				onPress={ () => this.props.navigation.navigate('Details',{
					itemId: 'klkkk',
					otherParam: 'fei-fly',
				}) }
			/> */}
			<Text>{this.props.counter.count}</Text>
			<Text>{this.props.user.name}</Text>
			<Button
				title="reset"
				onPress={ this._onPressReset.bind(this) }
			/>
			<Button
				title="+1"
				onPress={ this._onPressInc.bind(this) }
			/>
			<Button
				title="-1"
				onPress={ this._onPressDec.bind(this) }
			/>
			<CheckBox
				title='Click Here'
				checkedIcon='dot-circle-o'
  				uncheckedIcon='circle-o'
				checked={ this.state.checked }
				onPress={ this.change.bind( this ) }
			/>
			<FormLabel>Name</FormLabel>
			<FormInput 
				onChangeText={ (name)=>this.setState({name}) }
			/>
			<FormLabel>Phone</FormLabel>
			<FormInput 
				onChangeText={ (phone)=>this.setState({phone}) }
			/>
			<Button
				title='test'
				onPress={ this._submit.bind(this) }
			/>
		</View>
	  );
	}
}

//将该组件的props和全局的state对应起来
const mapStateToProps = state => ({
	counter: state.counter,
	user: state.test
})
//将该组件的props和全局的state对应起来
export default connect(mapStateToProps)(SettingsScreen);