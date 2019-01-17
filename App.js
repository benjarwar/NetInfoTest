/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, NetInfo } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { isConnected: "false" };
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener("connectionChange", isConnected => {
      console.log("addEventListener isConnected", isConnected);
      this.setState(() => ({ isConnected: isConnected ? "true" : "false" }));
    });

    setInterval(() => {
      NetInfo.isConnected.fetch().then(isConnected => {
        console.log("setInterval isConnected", isConnected);
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          isConnected: {this.state.isConnected}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
