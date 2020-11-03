import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './screens/Welcome/LoginScreen';
import RegisterScreen from './screens/Welcome/RegisterScreen';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';

const Stack = createStackNavigator();

const Navigations = () => {
  // const backToIcon = (
  //   <View style={{ paddingLeft: 10 }}>
  //     <Icon color="black" name="arrow-left" />
  //   </View>
  // );

  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: 'white',
            shadowColor: 'white',
            shadowRadius: 0,
            elevation: 0,
          },
          headerTitle: '',
          headerRight: () => (
            <View style={{ paddingRight: 20 }}>
              <Icon color="black" name="close" style={{ fontSize: 30 }} />
            </View>
          ),
        }}
      />

      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default Navigations;
