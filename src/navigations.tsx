import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './common/utils';
import { getCurrentUser, restoreToken } from './redux/slices/authSlice';
import HomeScreen from './screens/Home/HomeScreen';
import UserDetailScreen from './screens/Profile/UserDetailScreen';
import ForgotPasswordScreen from './screens/Welcome/ForgotPasswordScreen';
import LoginScreen from './screens/Welcome/LoginScreen';
import RegisterScreen from './screens/Welcome/RegisterScreen';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';

const Stack = createStackNavigator();

const Navigations = () => {
  const currentUser = useSelector(getCurrentUser);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch(restoreToken({ token: currentUser?.token }));
    };

    bootstrapAsync();
  }, [currentUser, dispatch]);

  const backToIcon = (navigation: any) => (
    <Pressable style={{ paddingLeft: 20 }} onPress={() => navigation.goBack()}>
      <Icon color="black" name="arrow-left" style={{ fontSize: 30 }} />
    </Pressable>
  );

  const moreIcon = () => (
    <Pressable style={{ paddingRight: 20 }}>
      <Icon color="black" name="ellipsis-h" style={{ fontSize: 30 }} />
    </Pressable>
  );

  const routesWithAuth = () => {
    return (
      <>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            headerStyle: {
              shadowRadius: 0,
              elevation: 0,
              borderBottomWidth: 0,
            },
            headerTitle: '',
            headerLeft: () => <Text style={{ marginLeft: 20, fontSize: 20 }}>paters</Text>,
            headerRight: () => {
              return (
                <View style={{ marginRight: 20, flexDirection: 'row' }}>
                  <Icon name="search" style={{ fontSize: 30, marginRight: 30 }} />

                  <Icon name="clock-o" style={{ fontSize: 30 }} />
                </View>
              );
            },
          })}
        />

        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={({ navigation }) => ({
            headerStyle: {
              shadowRadius: 0,
              elevation: 0,
              borderBottomWidth: 0,
            },
            headerTitle: 'mayu',
            headerTitleStyle: {
              textAlign: 'center',
            },
            headerLeft: () => backToIcon(navigation),
            headerRight: () => moreIcon(),
          })}
        />
      </>
    );
  };

  const routesWithoutAuth = () => {
    return (
      <>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={({ navigation }) => ({
            headerLeft: () => null,
            headerStyle: {
              shadowRadius: 0,
              elevation: 0,
            },
            headerTitle: '',
            headerRight: () => (
              <Pressable style={{ paddingRight: 20 }} onPress={() => navigation.goBack()}>
                <Icon color="black" name="close" style={{ fontSize: 30 }} />
              </Pressable>
            ),
          })}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={({ navigation }) => ({
            headerLeft: () => null,
            headerStyle: {
              shadowRadius: 0,
              elevation: 0,
            },
            headerTitle: '',
            headerRight: () => (
              <Pressable style={{ paddingRight: 20 }} onPress={() => navigation.goBack()}>
                <Icon color="black" name="close" style={{ fontSize: 30 }} />
              </Pressable>
            ),
          })}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={({ navigation }) => ({
            headerStyle: {
              shadowRadius: 0,
              elevation: 0,
            },
            headerTitle: '',
            headerLeft: () => backToIcon(navigation),
          })}
        />
      </>
    );
  };

  return (
    <Stack.Navigator initialRouteName="Welcome">
      {currentUser && currentUser.token ? routesWithAuth() : routesWithoutAuth()}
    </Stack.Navigator>
  );
};

export default Navigations;
