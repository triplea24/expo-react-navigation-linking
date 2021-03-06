import React from "react";
import { Text, View, Button } from "react-native";
import { Linking } from "expo";

export default class HomeScreen extends React.Component {
  renderButton = path => (
    <Button
      title={`Go to ${path}`}
      onPress={() => {
        const redirectUrl = Linking.makeUrl(path);
        console.log("redirect", redirectUrl);
        Linking.openURL(redirectUrl);
      }}
    />
  );
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        {this.renderButton("app/detail")}
        {this.renderButton("profile/detail")}
        {this.renderButton("profile/main")}
      </View>
    );
  }
}
