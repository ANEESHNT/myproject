import React, {Component} from 'react';
import { View, Image,TouchableOpacity,StyleSheet,Button,Text,ScrollView} from 'react-native';
import { Divider } from 'react-native-elements';
import {  CardItem} from 'native-base';
import ModelTester from '../Components/Picker'

class Spices extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    fetch('http://192.168.43.154:4000/Spices')
    .then((response) => response.json())
    .then((responseJson) => {
        
        //there are chances that the data coming from server is string you need to parse it in json run it
        this.setState({
            
            dataSource: responseJson,
          }, function(){
  
          });
    })
    .catch((error) =>{
      console.error(error);
    })
    }

  render() {
    return (
      
      <View >
         <ScrollView showsVerticalScrollIndicator={false}>
      {(this.state.dataSource!=undefined)?this.state.dataSource.map(item=>
      <View key={item._id}>
        <CardItem >
       <TouchableOpacity>
       <Image style={{width: 120, height: 120}}
          
          source={{uri: 'http://192.168.43.154:4000/'+ item.image}}
          
        />
      </TouchableOpacity>
      <View style={{flex: 1,paddingLeft:10,paddingBottom:50}}>
         <Text style={{color:'black',fontSize:15}} >{item.pname}</Text>
         <ModelTester/>
           <Text style={{textDecorationLine:'line-through'}}>MRP:Rs 70</Text>
           <Text style={{fontWeight:'bold'}}> Rs {item.price}</Text>
           </View>
              <View style={{paddingTop:30,width:50}}>
               < Button color='green' title="ADD"/></View>
      </CardItem>
      <Divider style={{ backgroundColor:'#d6d7da' }} />
      </View>
      
      ):<Text></Text>
      }
      </ScrollView>
   </View>
      
      

    );
  }
}

export default Spices;


