import React, {Component} from 'react';
import {ScrollView, View, Image,TouchableOpacity,StyleSheet} from 'react-native';

import { Card} from 'native-base';


class Cleaning extends Component {
  render() {
    
    return (
       
      <ScrollView showsVerticalScrollIndicator={false} ref={(view) => this._scrollView = view}>
      <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.container}>
     
      <View style={styles.box}>
       <Card>
       <TouchableOpacity  onPress={() => this.props.navigation.navigate('Bar')}>
        <Image style={{width: 160, height: 150}}
         source={require( './Assets/bars.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Liquid')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/liquids.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Freshener')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/Fresheners.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>


      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Utensil')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/utensils.jpg')}
          
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


export default Cleaning;

var styles = StyleSheet.create({
  container: {
      
      flexDirection:"row",
     justifyContent:'space-evenly',
      flexWrap:'wrap',
      padding:5,
      

  },
}
)