import React, {Component} from 'react';
import {ScrollView, View, Image,TouchableOpacity,StyleSheet} from 'react-native';

import { Card} from 'native-base';


class Bakery extends Component {
  render() {
    
    return (
       
      <ScrollView showsVerticalScrollIndicator={false} ref={(view) => this._scrollView = view}>
      <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.container}>
     
      <View style={styles.box}>
       <Card>
       <TouchableOpacity  onPress={() => this.props.navigation.navigate('Dairy')}>
        <Image style={{width: 160, height: 150}}
         source={require( './Assets/dairy.png')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Bread')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/bread.png')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Cookie')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/cookie.png')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>


      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Cake')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/cakes.png')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    
      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Ice')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/ice.png')}
          
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


export default Bakery;

var styles = StyleSheet.create({
  container: {
      
      flexDirection:"row",
     justifyContent:'space-evenly',
      flexWrap:'wrap',
      padding:5,
      

  },
}
)