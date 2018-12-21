import React from "react";
import { Text, View, Button } from "react-native";
import { Linking } from "expo";

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title={"Go to link"}
          onPress={() => {
            const redirectUrl = `${Expo.Linking.makeUrl("home")}`;
            Linking.openURL(redirectUrl);
          }}
        />
      </View>
    );
  }
}
