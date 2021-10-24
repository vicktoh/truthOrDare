import React, { FC, useRef, useEffect, } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import Colors from "../constants/Colors";
import LottieView from "lottie-react-native";
import Layout from "../constants/Layout";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";


const lottieAnimation = require("../assets/lottie/cheers.json");

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export const MainScreen: FC<Props> = ({navigation}) => {
  var animationRef = useRef<any>();
  useEffect(() => {
    animationRef.current.play(0, 50);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <LottieView
          loop={false}
          ref={(animation) => {
            animationRef.current = animation;
          }}
          source={lottieAnimation}
          style={styles.animation}
          colorFilters={[
              {
                  keypath: 'glass1',
                  color : Colors.light.mainColorLight
              },
              {
                  keypath: 'foam',
                  color: Colors.light.mainColorLight
              },
              {
                  keypath: 'liquid',
                  color: Colors.light.mainColorLight
              },
              {
                  keypath: 'liquid 2',
                  color: Colors.light.mainColorLight
              },
              {
                  keypath: 'olive',
                  color: Colors.light.mainColorLight
              },
              {
                  keypath: 'Shape Layer 1',
                  color: Colors.light.mainColorLight
              },
          ]}
        />
      </View>
      <Text style = {[styles.mainText, {marginBottom: 0}]}>Truth</Text>
      <Text style = {[styles.mainText, {marginTop: 2}]}>or</Text>
      <Text style = {[styles.mainText, {marginBottom: 8}]}>Dare</Text>
      <Text style = {styles.credits}>By Alfredo and Vico</Text>
      <TouchableOpacity style = {styles.cta} onPress= {()=> navigation.push('Option')} >
          <Text style={styles.ctaText}>start</Text>
      </TouchableOpacity>
      <TouchableOpacity style= {[styles.settingsButon]}>
      
      <MaterialIcons name="settings" size={32} color={Colors.light.mainColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.light.background,
    color: Colors.light.mainColor,
    alignItems: "center",
    justifyContent: 'center',
    padding: 36
  },
  mainText: {
      fontSize: 64,
      fontFamily: "Lato",
      lineHeight: 60,
      fontWeight: "700",
      color: Colors.light.secondaryBrown
  },
  animation: {
      width: 250,
      backgroundColor: Colors.light.background,
      marginTop: 12,
      marginBottom: 3
  },
  credits: {
    fontSize: 20,
    fontFamily: 'Dancing Script',
    color: Colors.light.secondaryBrownDark
  },
  cta: {
      
      width: "100%",
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "auto",
      height: 52,
      marginBottom: 16,
      backgroundColor: Colors.light.mainColor,
      color: Colors.light.background,
      marginRight: 24,
      marginLeft: 24,
      borderRadius: Layout.borderRadius,
     
  },
  ctaText: {
    fontFamily: "Lato",
    fontSize: 24,
    color: 'white',
    fontWeight: "bold"
  },
  settingsButon: {
      position: "absolute",
      right: 24,
      top: (StatusBar.currentHeight || 10) + 24,
      padding: 10
  }
});
