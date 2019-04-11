import React, {Component} from 'react';
import {ScrollView, View, Image,TouchableOpacity,StyleSheet} from 'react-native';

import { Card} from 'native-base';


class Beverage extends Component {
  render() {
    
    return (
       
      <ScrollView showsVerticalScrollIndicator={false} ref={(view) => this._scrollView = view}>
      <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.container}>
     
      <View style={styles.box}>
       <Card>
       <TouchableOpacity  onPress={() => this.props.navigation.navigate('Coffee')}>
        <Image style={{width: 160, height: 150}}
         source={require( './Assets/coffee.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Tea')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/tea.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Water')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/water.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>


      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Health')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/health.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    
      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Juices')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/juices.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Energy')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/soft.jpg')}
          
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


export default Beverage;

var styles = StyleSheet.create({
  container: {
      
      flexDirection:"row",
     justifyContent:'space-evenly',
      flexWrap:'wrap',
      padding:5,
      

  },
}
)