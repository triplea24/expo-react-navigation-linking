import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { Linking } from "expo";

import { HomeScreen, DetailsScreen, ProfileScreen } from "./src/screens";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: "home/"
    },
    Details: {
      screen: DetailsScreen,
      path: "detail/"
    }
  },
  {
    initialRouteName: "Home"
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      path: "main/"
    },
    Details: {
      screen: DetailsScreen,
      path: "detail/"
    }
  },
  { initialRouteName: "Profile" }
);

const AppNavigator = createBottomTabNavigator(
  {
    App: HomeStack,
    Profile: ProfileStack
  },
  {
    initialRouteName: "Profile"
  }
);

const AppContainer = createAppContainer(AppNavigator);

const uriPrefix = Linking.makeUrl("/");

export default class App extends React.Component {
  componentDidMount() {
    Linking.getInitialURL().then(url => {
      // const { path, queryParams } = Linking.parse(url);
      // Linking.openURL(url);
    });
    Linking.addEventListener("url", this._handleUrl);
  }
  _handleUrl = url => {
    let { path, queryParams } = Linking.parse(url);
    alert(
      `Linked to app with path: ${path} and data: ${JSON.stringify(
        queryParams
      )}`
    );
  };

  render() {
    return <AppContainer uriPrefix={uriPrefix} />;
  }
}
