import React,{Component} from 'react';
import {View , Text,TouchableOpacity} from 'react-native';

export default class Home extends Component{
  render()
  {
    return(
      <View
      style={{flex:1, justifyContent:'center' , alignItems:'center', backgroundColor:'#ff' }}>
      <Text>Home</Text>
      <TouchableOpacity
      style={{backgroundColor:'red'}}
      onPress={()=> { this.props.navigation.navigate('ManHinh_Detail')}}
      >
      <Text
      style={{color:'green',fontSize:20}}>GO TO DETAİL</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
