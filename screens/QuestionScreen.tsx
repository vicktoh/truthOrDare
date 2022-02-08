import React, { FC, useState, useRef, useContext } from "react";
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
import LottieView from "lottie-react-native";
import { QuestionsContext } from '../hooks/context'
type Question = {
    title: string;
    level: string;
};
const truths = require("../constants/truths.json") as Question[];
const dares = require("../constants/dares.json") as Question[];

type Props = NativeStackScreenProps<RootStackParamList, "Question">;

export const QuestionScreen: FC<Props> = ({ navigation, route: { params } }) => {
    const [randomIndex, setRandomIndex] = useState(0);
    var animationRef = useRef<any>();
    const allQuestions = useContext(QuestionsContext);
    console.log(allQuestions)
    const {  level: {background, textColor, value, icon}, type  } = params;
    
    let questions = allQuestions ?  allQuestions[type] : [];
    questions = questions.filter(({ level }) => level.toLowerCase() === value.toLowerCase());
    const generateRandom = ()=>{
        animationRef.current.play();
        const randomNumber = Math.floor(Math.random() * questions.length);
        setRandomIndex(randomNumber)
    }
    return (
        <View style={[styles.container, {backgroundColor : background}]}>
            <Text style = {[styles.title, {color: textColor}]}>{type}</Text>
            <View style={styles.subContainer}>
                
                <LottieView ref = {(animation)=> animationRef.current = animation} loop = {false} source = {icon} style= {styles.lottie} />
                <Text style = {[styles.text, {color: textColor}]}>
                    {questions[randomIndex]?.question}
                </Text>
                <TouchableOpacity onPress= {generateRandom} style = {[styles.randomButton, { backgroundColor: textColor}]}>
                    <Text style = {{color: background}}>🎲 Random</Text>
                </TouchableOpacity>
            </View>
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
        alignItems: 'center'
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 36,
        marginRight: 36,
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    text: {
        fontFamily: "Lato",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 24,
        marginBottom: 16,
        textAlign: "center"
    },
    title: {
        fontFamily: "Lato",
        fontSize: 36,
        marginTop: (StatusBar.currentHeight || 24) + 48
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
    randomButton: {
        width: 200,
        height: 56,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 36
    },
    lottie: {
        width: 104,
    },
});
