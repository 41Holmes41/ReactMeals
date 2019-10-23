import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';

import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';

import MealsNavigator from './navigation/MealsNavigator';

//possibly improves efficiency for the ios or android platforms
useScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded]= useState(false);

  if (!fontLoaded) {
    <AppLoading
    startAsync= {fetchFonts}
    onFinish={() => setFontLoaded(true)}
    />
  }

  return (
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>
  );
}

