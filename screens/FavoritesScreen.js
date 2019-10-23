import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import DefaultText from '../components/DeafultText';

import {useSelector} from 'react-redux';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {

  //react-redux automatically provides the current state for useSelector
  //state.meals is created becuase of the key name 'meals' used in combineReducers
  //.favoriteMeals is returned from the meals store result of this selector
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length===0 || !favMeals) {
    return <View style={styles.content}><DefaultText>No favortite meals found.  Start adding some!</DefaultText></View>
  }

  return (<MealList listData={favMeals} navigation={props.navigation} />)
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu' onPress={()=>{
      navData.navigation.toggleDrawer();
    }}/></HeaderButtons>
  }
};

const styles= StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen;