import React, {Component} from 'react';
import {ScrollView, View, Image,TouchableOpacity,StyleSheet} from 'react-native';

import { Card} from 'native-base';


class FoodGrains extends Component {
  render() {
    
    return (
       
      <ScrollView showsVerticalScrollIndicator={false} ref={(view) => this._scrollView = view}>
      <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.container}>
     
      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Flour')}>
        <Image style={{width: 160, height: 150}}
         source={require( './Assets/Ata.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Rice')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/rice.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Staples')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/staples.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>


      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Dal')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/dal.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    
      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Oils')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/oil&ghee.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>
    
      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Spices')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/spices.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Dry')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/Dry.jpg')}
          
        />
      </TouchableOpacity>
      </Card>
      </View>

      <View style={styles.box}>
       <Card>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('Salt')}>
        <Image style={{width: 160, height: 150}}
         
          source={require( './Assets/sugar.jpg')}
          
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


export default FoodGrains;

var styles = StyleSheet.create({
  container: {
      
      flexDirection:"row",
     justifyContent:'space-evenly',
      flexWrap:'wrap',
      padding:5,
      

  },
}
)