import * as React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useHeaderHeight } from "@react-navigation/stack";
import { Dimensions } from "react-native";

export class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleName = (text) => {
    this.setState({ name: text });
  };
  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handleMessage = (text) => {
    this.setState({ message: text });
  };

  save = (name, email, message) => {
    alert("Name:" + name + "\nE-mail: " + email + "\nMessage: " + message);
  };

  render() {
    const styles = StyleSheet.create({
      titleView: {
        alignSelf: "flex-start",
      },
      title: {
        fontSize: 32,
        fontFamily: "Helvetica",
        fontWeight: "bold",

        marginTop: 55,
        marginLeft: 30,
      },
      text: {
        fontSize: 20,
        marginBottom: 10,
        lineHeight: 35,
      },
      field: {
        marginHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      },
      messageField: {
        height: 200,
      },
      formLabel: {
        marginHorizontal: 27,
        marginBottom: 8,

        marginTop: 23,
        fontSize: 16,
        fontFamily: "Helvetica",
      },
      submit: {
        marginTop: 50,
        marginBottom: 50,
        marginHorizontal: 40,
        borderRadius: 70,
        padding: 15,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.22,
        shadowRadius: 5.46,

        elevation: 9,
      },
    });

    return (
      <View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Contact Us</Text>
        </View>
        <Text style={styles.formLabel}>Name</Text>
        <View style={styles.field}>
          <TextInput
            style={styles.fieldPressed}
            ref={(input) => {
              this.name = input;
            }}
            onChangeText={(text) => this.handleName(text)}
          ></TextInput>
        </View>
        <Text style={styles.formLabel}>E-mail</Text>
        <View style={styles.field}>
          <TextInput
            style={styles.fieldPressed}
            ref={(input) => {
              this.email = input;
            }}
            onChangeText={(text) => this.handleEmail(text)}
          ></TextInput>
        </View>
        <Text style={styles.formLabel}>Message</Text>
        <View style={styles.field}>
          <TextInput
            style={styles.messageField}
            ref={(input) => {
              this.message = input;
            }}
            onChangeText={(text) => this.handleMessage(text)}
          ></TextInput>
        </View>
        <Button
          color="black"
          title="Submit"
          buttonStyle={styles.submit}
          titleStyle={{ color: "black" }}
          titleColor="black"
          onPress={() =>
            this.save(this.state.name, this.state.email, this.state.message)
          }
        ></Button>
      </View>
    );
  }
}
