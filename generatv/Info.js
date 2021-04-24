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

export const Info = () => {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.title}>Info</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "90%" }}>
          <Text style={styles.text}>
            Have you ever spent more time choosing what to watch than actually
            watching? Then, this application is perfect for you! With a simple
            click of a button, you will get recommend a new TV Show. You can
            press the heart button if you like the TV Show and if you don't you
            can press the dislike button. But be careful with disliking because
            once you dislike a TV show you won't see it again.
          </Text>
        </View>
      </View>
    </View>
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
});
