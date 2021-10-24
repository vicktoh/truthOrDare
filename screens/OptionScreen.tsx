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
import { RootStackParamList } from "../types";
import Colors from "../constants/Colors";

type Props = NativeStackScreenProps<RootStackParamList, "Option">;

export const OptionScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.subContainer]}
        onPress={() => {
          navigation.push("Level", { option: "truth" });
        }}
      >
        <Text style={[styles.text, { color: Colors.light.secondaryBrown }]}>
          Truth
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.subContainer,
          { backgroundColor: Colors.light.mainColor },
        ]}
        onPress={() => {
          navigation.push("Level", { option: "dare" });
        }}
      >
        <Text style={[styles.text, { color: "white" }]}>Dare</Text>
      </TouchableOpacity>
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
    flexDirection: "row",
    backgroundColor: Colors.light.background,
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Lato",
    fontSize: 52,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    left: 16,
    top: (StatusBar.currentHeight || 24) + 24,
    width: 42,
    height: 72,
  },
});
