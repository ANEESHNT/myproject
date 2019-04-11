import React, {Component} from 'react';
import {ScrollView, View, Image,TouchableOpacity,StyleSheet} from 'react-native';

import { Card,CardItem } from 'native-base';


class HomeScreen extends Component {
  render() {
    
    return (
       
      <ScrollView showsVerticalScrollIndicator={false} ref={(view) => this._scrollView = view}>
      <View>
      <View style={styles.container}>
     
      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('fruits')}>
        <Image style={{width: 160, height: 150}}
         source={require( './Assets/fruits&veg.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('foodGrains')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/grains.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('bakery')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/bakery.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>


      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('cleaning')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/cleaning.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    
      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Beverage')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/beverages.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    
    

      <View style={styles.box}>
       <Card>
       <TouchableOpacity >
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/snack.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>

      

    </View>
    </View>
    </ScrollView>
    );
  }
}


export default HomeScreen;

var styles = StyleSheet.create({
    container: {
        
        flexDirection:"row",
       justifyContent:'space-evenly',
        flexWrap:'wrap',
        padding: 5,
      
        

    },

}
)