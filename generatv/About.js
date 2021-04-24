import * as React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  StatusBar,
  Button,
  TextInput,
  ScrollView,
  Animated,
  ImageBackground,
  scrollToEnd,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useHeaderHeight } from "@react-navigation/stack";
import { Dimensions } from "react-native";

export const About = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.titleView}>
        <Text style={styles.title}>Fun Facts About TV Shows</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "90%" }}>
          <Text style={{ fontSize: 23, fontWeight: "bold", marginBottom: 5 }}>
            The Fresh Prince of Bel-Air
          </Text>
          <Text style={styles.text}>
            In the earlier episodes, Will Smith would learn the entire script,
            which means sometimes he can be seen mouthing other actor's lines.
          </Text>
          <View style={styles.showContainer}>
            <Image style={styles.show} source={require("./assets/will.png")} />
          </View>
          <Text style={{ fontSize: 23, fontWeight: "bold", marginBottom: 5 }}>
            Buffy the Vampire Slayer
          </Text>
          <Text style={styles.text}>
            It was the first show to use the word "Google" as a verb on TV.
          </Text>
          <View style={styles.showContainer}>
            <Image
              style={styles.show}
              source={require("./assets/buffy.webp")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleView: {
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 32,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 55,
    marginLeft: 30,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    lineHeight: 35,
  },
  show: {
    width: "100%",
    height: 160,
    borderRadius: 37,
    marginTop: 10,
  },
  showContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginBottom: 15,
  },
});
