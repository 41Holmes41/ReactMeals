import React from 'react';
import {View,StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import { CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DeafultText';

const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  //react-redux automatically provides the current state for useSelector
  //state.meals is created becuase of the key name 'meals' used in combineReducers
  //filteredMeals is returned from the meals store result of this selector
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId)>=0
  );

  if (displayedMeals.length===0) {
      return <View style={styles.content}>
        <DefaultText>No meals found.  check filters?</DefaultText>
      </View>
  }

  return (
    <MealList listData={displayedMeals} navigation={props.navigation}/>
  )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat=>cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles= StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen;