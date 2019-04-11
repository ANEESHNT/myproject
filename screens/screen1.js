import React, {Component} from 'react';
import {ScrollView, View, Image,TouchableOpacity,StyleSheet} from 'react-native';

import { Card} from 'native-base';


class Fruits extends Component {
  render() {
    
    return (
       
      <ScrollView showsVerticalScrollIndicator={false} ref={(view) => this._scrollView = view}>
      <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.container}>
     
      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('FreshFruits')}>
        <Image style={{width: 160, height: 150}}
         source={require( './Assets/FreshFruits.jpg')}
          
        />
      </TouchableOpacity >
      </Card>
      </View>
    

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('FreshVeg')} >
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/FreshVeg.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('ExoticFruVeg')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/exotic.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>


      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('OrganicFruVeg')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/organic.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    
      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Herbs')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/herbs.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    
      <View style={styles.box}>
       <Card>
       <TouchableOpacity >
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/cuts&sprouts.jpg')}
          
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


export default Fruits;

var styles = StyleSheet.create({
    container: {
        
        flexDirection:"row",
       justifyContent:'space-evenly',
        flexWrap:'wrap',
        padding:5,
        

    },
}
)