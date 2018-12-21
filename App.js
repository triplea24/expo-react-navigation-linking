import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Linking } from "expo";

import { HomeScreen, DetailsScreen } from "./src/screens";

const AppNavigator = createStackNavigator(
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

const AppContainer = createAppContainer(AppNavigator);

const uriPrefix = Linking.makeUrl("/");

export default class App extends React.Component {
  componentDidMount() {
    Linking.getInitialURL().then(url => {
      const { path, queryParams } = Linking.parse(url);
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
