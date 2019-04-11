import HomeScreen from '../screens/Home'
import Fruits from '../screens/screen1'
import FoodGrains from '../screens/screen2'
import Bakery from '../screens/screen3'
import Cleaning from '../screens/screen4'
import Beverage from '../screens/screen5'
import FreshFruits from './FreshFruits'
import FreshVeg from './FreshVeg'
import ExoticFruVeg from './ExoticFruitsVeg'
import OrganicFruVeg from './OrganicFruitsVeg'
import Herbs from './HerbSeasonings'
import Flour from './FlourAtta'
import Rice from './RiceProduct'
import Staples from './OrganicStaples'
import Dal from './DalPulses'
import Oils from './OilGhee'
import Spices from './MasalaSpices'
import Salt from './SaltSugar'
import Dry from './dryFruits'
import Dairy from './Dairies'
import Bread from './Breads'
import Cake from './Cakes'
import Cookie from './Cookies'
import Ice from './Icecreams'
import Bar from './Bars'
import Liquid from './Liquids'
import Freshener from './Fresheners'
import Utensil from './Utensils'
import Coffee from './Coffee'
import Tea from './Tea'
import Water from './Water'
import Health from './HealthDrinks'
import Energy from './EnergyDrinks'
import Juices from './freshJuices'

import { createStackNavigator, createAppContainer } from 'react-navigation'; 

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    fruits:Fruits,
    foodGrains:FoodGrains,
    bakery:Bakery,
    cleaning:Cleaning,
    Beverage:Beverage,
    FreshFruits:FreshFruits,
    FreshVeg:FreshVeg,
    ExoticFruVeg:ExoticFruVeg,
    OrganicFruVeg:OrganicFruVeg,
    Herbs:Herbs,
    Flour:Flour,
    Rice:Rice,
    Staples:Staples,
    Dal:Dal,
    Oils:Oils,
    Spices:Spices,
    Salt:Salt,
    Dry:Dry,
    Dairy:Dairy,
    Bread:Bread,
    Cake:Cake,
    Cookie:Cookie,
    Ice:Ice,
    Bar:Bar,
    Liquid:Liquid,
    Freshener:Freshener,
    Utensil:Utensil,
    Coffee:Coffee,
    Tea:Tea,
    Water:Water,
    Health:Health,
    Energy:Energy,
    Juices:Juices




  
    
   },
  {
    initialRouteName: 'Home',
  }
);

 export const AppContainer = createAppContainer(RootStack);


 
  
