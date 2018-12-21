import React from "react";
import { Text, View, Button } from "react-native";
import { Linking } from "expo";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.push("Details")}
        />
        <Button
          title={"Go to link"}
          onPress={() => {
            const redirectUrl = `${Linking.makeUrl("detail")}`;
            console.log("redirect", redirectUrl);
            Linking.openURL(redirectUrl);
          }}
        />
      </View>
    );
  }
}
