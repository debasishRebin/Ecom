import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Animated} from 'react-native';
// import {createStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import CustomDrawerContent from '../CustomDrawerContent';
import Favorite from './screens/Favorite/Favorite';
import LogInReg from './screens/LogInReg/LogInReg';
import Otp from './screens/Otp/Otp';
import ProductOverview from './screens/ProductOverview/ProductOverview';
import Splash from './screens/Splash/Splash';

const forSlide = ({current, next, inverted, layouts: {screen}}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

const navOptionHandler = {
  headerShown: false,
  animation: 'none',
  cardStyleInterpolator: forSlide,
};

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="ProductOverview"
        component={ProductOverview}
        options={navOptionHandler}></StackHome.Screen>

      <StackHome.Screen
        name="Favorite"
        component={Favorite}
        options={navOptionHandler}></StackHome.Screen>
    </StackHome.Navigator>
  );
}
const stackAuth = createStackNavigator();

function AuthStack() {
  return (
    <stackAuth.Navigator initialRouteName="LogInReg">
      <StackApp.Screen
        name="LogInReg"
        component={LogInReg}
        options={navOptionHandler}
      />
      <StackApp.Screen name="Otp" component={Otp} options={navOptionHandler} />
    </stackAuth.Navigator>
  );
}

// Drawer Screen

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 250,
        },
      }}
      drawerStyle={{
        width: 260,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="MenuTab"
        component={HomeStack}
        options={{
          drawerIcon: ({color, size}) => <Feather name="home" color="red" />,
          drawerActiveTintColor: 'blue',
        }}
      />
    </Drawer.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const StackApp = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer initialRouteName="Splash">
      <StackApp.Navigator>
        <StackApp.Screen
          name="Splash"
          component={Splash}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="AuthStack"
          component={AuthStack}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
