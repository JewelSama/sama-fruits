import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator()


  const HomeTabs = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}


