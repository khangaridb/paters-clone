import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../../common/styles';
import ConversationsScreen from './ConversationsScreen';
import ProfileListScreen from './ProfileListScreen';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <View style={commonStyles.styles.fullHeightContainer}>
      <Tab.Navigator
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          style: { height: 80, justifyContent: 'center', overflow: 'visible', alignContent: 'center' },
        }}
        initialRouteName="Users"
        initialLayout={{ width: Dimensions.get('window').width }}>
        <Tab.Screen
          name="Search"
          options={{ tabBarIcon: () => <Icon name="search" style={styles.icon} /> }}
          component={ConversationsScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: () => <Icon name="heart" style={styles.icon} /> }}
          name="Matches"
          component={ConversationsScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: () => <Icon name="envelope" style={styles.icon} /> }}
          name="Conversations"
          component={ConversationsScreen}
        />
        <Tab.Screen
          options={{ tabBarIcon: () => <Icon name="user" style={styles.icon} /> }}
          name="Users"
          component={ProfileListScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
});

export default HomeScreen;
