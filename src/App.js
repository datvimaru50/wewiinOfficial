import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './app/store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

import LoginScreen from "./components/LoginScreen"
import Dashboard from "./components/Dashboard"
import CourseInfoDetail from "./components/CourseInfoDetail"
import CourseLearning from "./components/CourseLearning"
import Profile from "./components/Profile"

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Dashboard" options={{ title: 'Dashboard', headerShown: false }}  component={Dashboard} />
          <Stack.Screen name="CourseInfoDetail" options={{ title: 'Course Info' }}  component={CourseInfoDetail} />
          <Stack.Screen name="CourseLearning" options={{ title: 'Course Info' }}  component={CourseLearning} />
          <Stack.Screen name="Profile" options={{ title: 'Profile' }}  component={Profile} />
        </Stack.Navigator>
        
      </NavigationContainer>
    </Provider>
  );
}


