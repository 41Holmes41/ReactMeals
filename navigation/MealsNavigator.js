import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primaryColor
  }
});

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator, 
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>);
      }
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (<Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>);
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  }
});

export default createAppContainer(MealsFavTabNavigator);