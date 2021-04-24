import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { material } from "react-native-typography";
import { iOSColors } from "react-native-typography";
import { sanFranciscoWeights } from "react-native-typography";
import { Randomizer } from "./Randomizer";
import * as Animatable from "react-native-animatable";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.wallpaper}
        source={require("./assets/Wallpaper1.png")}
      >
        <Image
          style={styles.logo}
          resizeMode={"center"}
          source={require("./assets/Logo.png")}
        />

        <Image
          resizeMode="cover"
          style={styles.icon}
          source={require("./assets/Popcorn.png")}
        />
        <Animatable.Text
          animation="bounceInDown"
          style={[sanFranciscoWeights.bold, styles.textHome]}
        >
          Random TV Show Selector
        </Animatable.Text>

        <Text style={[sanFranciscoWeights.regular, styles.textHome]}>
          Click to find a randomized TV Show to watch!
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          style={{ alignSelf: "center" }}
          onPress={() => {
            navigation.navigate("Randomizer");
          }}
        >
          <Image
            style={styles.button}
            source={require("./assets/Button.png")}
          ></Image>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wallpaper: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  icon: {
    width: 160,
    height: 190,
    alignSelf: "center",
    marginBottom: 20,
  },
  logo: {
    width: "100%",
    height: 100,
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignSelf: "center",
    width: 150,
    height: 150,
    marginBottom: 50,
    shadowColor: "#F70103",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.23,
    shadowRadius: 9.51,
  },

  textHome: {
    fontSize: 25,
    alignSelf: "center",
  },
  textHome: {
    fontSize: 20,
    alignSelf: "center",
    marginBottom: 10,
    textAlign: "center",
  },
});
