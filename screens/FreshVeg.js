import React, {Component} from 'react';
import { View, Image,TouchableOpacity,StyleSheet,Button,Text,ScrollView} from 'react-native';
import { Divider } from 'react-native-elements';
import {  CardItem} from 'native-base';
import ModelTester from '../Components/Picker'

class FreshVeg extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    fetch('http://192.168.43.154:4000/FreshVeg')
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
           
           <View style={{marginTop:5,marginBottom:5}}>
          <Text style={{textAlign:'center',color:'black',fontSize:15,}}>FRESH VEGETABLES</Text>
        </View>
        <Divider style={{ backgroundColor:'#d6d7da' }} />
        <ScrollView showsVerticalScrollIndicator={false}>
       
        <View style={{width:350,flexDirection:'row',marginBottom:5,marginTop:5}}>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
 
       <View style={{paddingLeft:5}}>
        <Button 
      title="Tomato"
      color="green">
    </Button></View>
   
    <View style={{paddingLeft:5}}>
    <Button 
      title="Potato"
      color="green">
    </Button></View>
   
    <View style={{paddingLeft:5}}>
    <Button 
      title="Chilli"
      color="green">
    </Button></View>
   
    <View style={{paddingLeft:5}}>
    <Button 
      title="Cabbages"
      color="green">
    </Button></View>
    
    <View style={{paddingLeft:5}}>
    <Button 
      title="Capsicum"
      color="green">
   </Button></View>

     
   <View style={{paddingLeft:5}}>
    <Button 
      title="Beans"
      color="green">
   </Button></View>


</ScrollView>
</View>
<Divider style={{ backgroundColor:'#d6d7da' }} />
         
       
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

export default FreshVeg;


