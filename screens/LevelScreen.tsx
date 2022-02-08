import React, { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, Level } from "../types";
import Colors from "../constants/Colors";
import { color } from "react-native-reanimated";
import { LevelCard } from "../components/LevelCard";
const childIcon = require("../assets/lottie/child2.json");
const matureIcon = require("../assets/lottie/mature.json");
const adultIcon = require("../assets/lottie/sexy.json");
type Props = NativeStackScreenProps<RootStackParamList, "Level">;

export const LevelScreen: FC<Props> = ({ navigation }) => {
  const levels: Level[] = [
    {
      title: "Normal",
      value: 'normal',
      description:
        "Get truth or dares questions that are “PG” or child friendly in nature",
      background: Colors.light.mainColor,
      icon: childIcon,
      textColor: "white",
    },
    {
      title: "Mature",
      description: "Get truth or dares for mature minds only!!!",
      background: "#F2E2E1",
      icon: matureIcon,
      value: 'mature'
    },
    {
      title: "Adult",
      description:
        "Get spicy and sexual dares  that are fun. For mature minds only!!",
      background: "#FFB09B",
      icon: adultIcon,
      value: 'adult'
    },
  ];
  return (
    <View style={styles.container}>
        <Text style = {[styles.title]}>{`Choose Level of your questions to be added`}</Text>
      {levels.map((level, i) => (
        <LevelCard
         key = {`level-${i}`}
          {...level}
          onClick={() => {
            navigation.push("Option", { level : {...level, textColor: level.textColor || Colors.light.secondaryBrownDark, } });
          }}
        />
      ))}
      <TouchableOpacity
        style={[styles.backButton]}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    left: 5,
    top: (StatusBar.currentHeight || 24) + 12,
    width: 42,
    height: 42,
  },
  title:{
      alignSelf: "center",
      fontSize: 20,
      marginTop: 32,
      marginBottom: 8,
      fontFamily: "Lato"
  }
});
