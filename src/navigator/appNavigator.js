import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WeatherPage from '../pages/WeatherPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const CustomTab = ({route}) => ({
//   tabBarIcon: ({focused, color, size}) => {
//     let iconName;
//     if (route.name === 'Início') {
//       iconName = 'home';
//     } else if (route.name === 'Busca') {
//       iconName = 'search';
//     }
//     return <Ionicons name={iconName} size={size} color={color} />;
//   },
// });

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={CustomTab}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {backgroundColor: 'black'},
      }}>
      <Tab.Screen name="Início" component={HomeRoutes} />
      <Tab.Screen name="Busca" component={SearchRoutes} />
    </Tab.Navigator>
  );
};

const WeatherApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Weather"
          component={WeatherPage}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default WeatherApp;
