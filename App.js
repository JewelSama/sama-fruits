import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import {HomeIcon, BookmarkIcon, ShoppingBagIcon, BellAlertIcon} from 'react-native-heroicons/mini'
import FavouriteScreen from './screens/FavouriteScreen';
import CartScreen from './screens/CartScreen';
import NotificationScreen from './screens/NotificationScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator()

  const HomeTabs = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: {position: 'absolute'}}} >
<Tab.Screen name="Home" component={HomeScreen}  
          options={{
            tabBarIcon: ({focused, color}) => (
              <HomeIcon size={24} color={focused ? "#de1f27" : "#ccc"} />
            ),
            tabBarActiveTintColor: '#de1f27'
          }}
        />

<Tab.Screen name="Favourite" component={FavouriteScreen}  
          options={{
            tabBarIcon: ({focused, color}) => (
              <BookmarkIcon size={24} color={focused ? "#de1f27" : "#ccc"} />
                
            ),
            tabBarActiveTintColor: '#de1f27',
          }}
        />

<Tab.Screen name="Cart" component={CartScreen}  
          options={{
            tabBarIcon: ({focused, color}) => (
              <ShoppingBagIcon size={24} color={focused ? "#de1f27" : "#ccc"} />
            ),
            tabBarActiveTintColor: '#de1f27'
          }}
        />

<Tab.Screen name="Notifications" component={NotificationScreen}  
          options={{
            tabBarIcon: ({focused, color}) => (
              <BellAlertIcon size={24} color={focused ? "#de1f27" : "#ccc"} />
            ),
            tabBarActiveTintColor: '#de1f27'
          }}
        />

        </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TailwindProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="HomeT" component={HomeTabs} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}


