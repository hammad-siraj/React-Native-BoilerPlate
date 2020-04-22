import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'native-base';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar barStyle="light-content" backgroundColor="#21349e" />
        <Text>Home!</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const BottomTabs = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: () => (
          <Icon name="home" type="Entypo" size={18} color="#fff" />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: () => (
          <Icon name="user" type="AntDesign" size={18} color="#fff" />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: () => (
          <Icon name="settings" type="Octicons" size={18} color="#fff" />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    lazy: true,
    tabBarOptions: {
      activeColor: '#f0edf6',
      inactiveColor: '#3F51B5',
      tabStyle: {backgroundColor: '#3F51B5'},
      showIcon: true,
      showLabel: false,
    },
  },
);

export default BottomTabs;
