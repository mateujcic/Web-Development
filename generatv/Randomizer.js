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

import { Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const top100 = [];
const liked = [];
let currentShow;

export const Randomizer = () => {
  useEffect(() => {
    fetch(
      "https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows?homeCountry=US&purchaseCountry=US&currentCountry=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "590b067e89mshb1ed3283a67e843p1aba94jsna95550b2650c",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json()) // Getting the actual response data

      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          top100[i] = data[i].replace("/title/", "");
        }
        fetchShow();
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const fetchShow = () => {
    let RandomNumber = Math.floor(Math.random() * 99);
    currentShow = top100[RandomNumber];
    fetch(
      "https://imdb8.p.rapidapi.com/title/get-top-stripe?tconst=" + currentShow,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "590b067e89mshb1ed3283a67e843p1aba94jsna95550b2650c",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json()) // Getting the actual response data
      .then((data) => {
        console.log(data);
        setTitle(data.title.title);
        setImage(data.title.image.url);
        setYear(data.title.year);
        fetchIMDB(currentShow);
        fetchGenre(currentShow);
        fetchDirector(currentShow);
        fetchCast(currentShow);
        fetchPlot(currentShow);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchIMDB = (currentShow) => {
    console.log(currentShow);
    fetch(
      "https://imdb8.p.rapidapi.com/title/get-reviews?tconst=" + currentShow,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "590b067e89mshb1ed3283a67e843p1aba94jsna95550b2650c",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setIMDB(data.imdbrating.rating);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchGenre = (currentShow) => {
    fetch(
      "https://imdb8.p.rapidapi.com/title/get-genres?tconst=" + currentShow,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "590b067e89mshb1ed3283a67e843p1aba94jsna95550b2650c",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data[1]);
        setGenre(data[0] + ", " + data[1]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchDirector = (currentShow) => {
    fetch(
      "https://imdb8.p.rapidapi.com/title/get-top-crew?tconst=" + currentShow,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "590b067e89mshb1ed3283a67e843p1aba94jsna95550b2650c",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.directors[0].name);
        setDirectors(data.directors[0].name);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchCast = (currentShow) => {
    fetch(
      "https://imdb8.p.rapidapi.com/title/get-full-credits?tconst=" +
        currentShow,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "590b067e89mshb1ed3283a67e843p1aba94jsna95550b2650c",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.cast[0].name);
        setActors(
          data.cast[0].name +
            ", " +
            data.cast[1].name +
            ", " +
            data.cast[2].name
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchPlot = (currentShow) => {
    fetch(
      "https://imdb8.p.rapidapi.com/title/get-plots?tconst=" + currentShow,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "590b067e89mshb1ed3283a67e843p1aba94jsna95550b2650c",
          "x-rapidapi-host": "imdb8.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.plots[0].text);
        setPlot(data.plots[0].text);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addToLikes = () => {
    liked.push(currentShow);
    console.log("Liked TV Shows:" + liked);
  };

  let [title, setTitle] = React.useState("");
  let [image, setImage] = React.useState(
    "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.impawards.com%2Ftv%2Fhow_to_get_away_with_murder.html&psig=AOvVaw1AnAPp33NZIxAWqJxh3irb&ust=1618785452154000&source=images&cd=vfe&ved=0CAIQjRxqGAoTCKDkmfOrhvACFQAAAAAdAAAAABCQAQ"
  );
  let [imdb, setIMDB] = React.useState(" ");
  let [releaseYear, setYear] = React.useState(" ");
  let [genre, setGenre] = React.useState("");
  let [directors, setDirectors] = React.useState("");
  let [actors, setActors] = React.useState("");
  let [plot, setPlot] = React.useState("");

  return (
    <Animated.ScrollView
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "flex-start",
        // marginTop: headerHeight + 20,
        paddingBottom: 100,
      }}
      bounces="true"
      pinchGestureEnabled="true"
      scrollsToTop="true"
    >
      <View style={(styles.titleView, { marginTop: 50 })}>
        <Image />
      </View>

      <View style={styles.card}>
        <Text style={styles.showTitle}>{title}</Text>
        <Image style={styles.show} resizeMode="cover" source={{ uri: image }} />
        <View style={styles.likeButtons}>
          <TouchableOpacity onPress={() => fetchShow()}>
            <Image
              style={styles.like}
              source={require("./assets/dislike.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              fetchShow();
              addToLikes();
            }}
          >
            <Image style={styles.like} source={require("./assets/like.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.imdb}>
          <Image
            style={styles.imdbImage}
            source={require("./assets/IMDB.png")}
          ></Image>

          <View
            style={{
              position: "absolute",
            }}
          >
            <Text style={styles.imdbText}> {imdb}/10</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.showInfo}>
            <Text style={{ color: "#606060", fontWeight: "bold" }}>
              Release year:
            </Text>{" "}
            {releaseYear}
          </Text>
          <Text style={styles.showInfo}>
            <Text style={{ color: "#606060", fontWeight: "bold" }}>Genre:</Text>{" "}
            {genre}
          </Text>
          <Text style={styles.showInfo}>
            <Text style={{ color: "#606060", fontWeight: "bold" }}>
              Director:
            </Text>{" "}
            {directors}
          </Text>
          <Text style={styles.showInfo}>
            <Text style={{ color: "#606060", fontWeight: "bold" }}>
              Actors:
            </Text>{" "}
            {actors}
          </Text>
          <Text
            style={{
              marginTop: 30,
              lineHeight: 35,
              fontSize: 20,
              marginBottom: 30,
            }}
          >
            {plot}
          </Text>
          <TouchableOpacity style={styles.links}>
            <Text
              style={{
                color: "white",
                fontSize: 21,
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Watch on <Text style={{ color: "#BC3B27" }}>Netflix</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text
              style={{
                color: "white",
                fontSize: 21,
                fontFamily: "Helvetica",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Watch on <Text style={{ color: "#20E080" }}>Hulu</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
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
  card: {
    flex: 1,
    width: "90%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 37,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  showTitle: {
    fontSize: 30,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    marginLeft: 14,
    marginBottom: 5,
  },
  show: {
    width: "100%",
    height: windowHeight * 0.6,
    borderRadius: 37,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },

  likeButtons: {
    flexDirection: "row",
    alignContent: "stretch",
    marginTop: 30,
    justifyContent: "space-around",
  },
  like: {
    width: 95,
    height: 87,
  },
  imdb: {
    flexDirection: "row",
    borderRadius: 3,
    backgroundColor: "#E6B91E",
    paddingVertical: 3,
    width: "62%",
    marginTop: 25,
  },
  imdbImage: {
    width: 100,
    height: 40,
    zIndex: 100,
    borderRadius: 3,
  },
  imdbText: {
    fontSize: 28,
    fontFamily: "Helvetica",
    fontWeight: "bold",
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 30,
    marginLeft: 65,
    paddingBottom: 9,
  },
  showInfo: {
    fontSize: 20,
    marginBottom: 10,
    lineHeight: 35,
  },
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
  links: {
    backgroundColor: "black",
    padding: 18,
    borderRadius: 9,
    marginHorizontal: 50,
    // paddingVertical:30
    textAlign: "center",
  },
  link: {
    backgroundColor: "black",
    padding: 18,
    borderRadius: 9,
    marginHorizontal: 50,
    // paddingVertical:30
    textAlign: "center",
    marginTop: 15,
    marginBottom: 50,
  },
});
