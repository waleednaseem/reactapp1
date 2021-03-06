import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {connect} from 'react-redux'
import {ADDTODO} from '../actions'

 class AddTodo extends Component {
  state={
    text:''
  }
  addTodo= (text) => {
    this.props.dispatch(ADDTODO(text))
    this.setState({text:''})
  }
  render() {
    return (
      <View style={{flexDirection:'row', margin: 20}}>
        <TextInput
          onChangeText={(text)=>this.setState({text})}
          value={this.state.text} 
          placeholder="Eg. create new video"
          style={{
                  borderWidth:1, borderColor:'#f2f2e1',
                  backgroundColor:'#eaeaea',height:50,flex:1,
                  padding:5
                }}
        />
        <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
          <View style={{height:50,backgroundColor:'#eaeaea',
              alignItems:'center', justifyContent:'center'}}>
            <Ionicons name="md-add" size= {30} style={{
              color:'#de9595', padding: 10
            }}/>
          </View>
      </TouchableOpacity>
      </View>
      
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
  
});
