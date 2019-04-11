import React, { Component } from "react";
import { View,Picker,Button} from "react-native";



 
 class ModalTester extends Component {
  state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
 
  
  render() {
  
    return (
   
     <View style={{ borderRadius: 4, borderWidth: 0.5,  borderColor: '#d6d7da',}}>
  
        <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "1kg" value = "1kg" />
               <Picker.Item label = "500g" value = "500g" />
               <Picker.Item label = "250g" value = "250g" />
        </Picker>
      
        </View>
    );
  }
}
export default ModalTester;

