import React,{Component} from 'react';
import {View , Text} from 'react-native';

export default class User extends Component{
  render()
  {
    return(
      <View
      style={{flex:1}}>
      <Text
      style={{padding:5,fontSize:20}}>
      userpage</Text>
      </View>
    );
  }
}
