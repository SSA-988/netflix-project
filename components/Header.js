import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MovieItems } from "../Context";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  const { profile, setProfile } = useContext(MovieItems);
  const navigation = useNavigation();
  const API_KEY = "b93a64480573ce5248c28b200d79d029";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) =>
          setMovies(
            data.results[Math.floor(Math.random() * data.results.length - 1)]
          )
        );
    };
    movieData();
  }, []);
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 480, position: "relative" }}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movies?.poster_path}`,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ height: 50, width: 120 }}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              style={{ marginRight: 10 }}
              name="search1"
              size={24}
              color="white"
            />
            <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
                borderRadius: 5,
              }}
              source={{ uri: profile.image }}
            />
            </Pressable>
          
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            margin: 20,
            paddingLeft: 20,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            TV shows
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
              marginHorizontal: 20,
            }}
          >
            Movies
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            Categories
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 15,
        }}
      >
        <View>
          <AntDesign
            style={{ textAlign: "center" }}
            name="plus"
            size={24}
            color="white"
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white",marginTop:3 }}>
            My List
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            padding: 8,
            width:120,
            justifyContent:"center",
            alignItems:"center",
            borderRadius: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo name="controller-play" size={24} color="black" />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
            Play
          </Text>
        </View>

        <View>
          <AntDesign
            style={{ textAlign: "center" }}
            name="infocirlceo"
            size={24}
            color="white"
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white",marginTop:3 }}>
            Info
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
