import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { HomeScreen } from "./HomeScreen.js";
import { Randomizer } from "./Randomizer.js";
import { Info } from "./Info.js";
import { About } from "./About.js";
import { Contact } from "./Contact.js";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home")
              // You can return any component that you like here!
              return (
                <FontAwesome5
                  style={styles.iconShadowo}
                  name="home"
                  size={24}
                  color={color}
                />
              );
            else if (route.name === "Info") {
              return (
                <FontAwesome5
                  style={styles.iconShadowo}
                  name="bolt"
                  size={24}
                  color={color}
                />
              );
            } else if (route.name === "Randomizer") {
              return (
                <Image
                  style={styles.button}
                  source={require("./assets/Button.png")}
                ></Image>
              );
            } else if (route.name === "Facts") {
              return (
                <FontAwesome
                  style={styles.iconShadowo}
                  name="search"
                  size={24}
                  color={color}
                />
              );
            } else if (route.name === "Contact") {
              return (
                <FontAwesome5
                  style={styles.iconShadowo}
                  name="rocket"
                  size={24}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#F4AD2D",
          labelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          style: {
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            position: "absolute",
            height: 70,
            margin: 13,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.51,
            shadowRadius: 13.16,

            elevation: 20,
            paddingBottom: 9,
            marginBottom: 15,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen
          options={{ tabBarLabel: "" }}
          name="Randomizer"
          component={Randomizer}
        />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="Facts" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    borderRadius: 90,
    width: 120,
    height: 120,
    margin: 0,
    padding: 0,
    paddingBottom: 9,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.14,
  },
  iconShadowo: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
