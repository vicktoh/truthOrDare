import React, { FC, useRef, useEffect } from "react";
import { Level } from "../types";
import LottieView from "lottie-react-native";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

type LevelProps = Level & { onClick: () => void };

export const LevelCard: FC<LevelProps> = ({
    title,
    description,
    icon,
    background,
    textColor,
    onClick
}) => {
    var animationRef = useRef<any>();
    useEffect(() => {
        animationRef.current.play();
    }, []);
    return (
        <TouchableOpacity
            style={[styles.cardContainer, { backgroundColor: background }]}
            onPress = {onClick}
        >
            <View style={[styles.columns, { flex: 2, alignItems: "center" }]}>
                <LottieView ref = {(animation)=> animationRef.current = animation} source={icon} style={styles.lottieStyle} />
            </View>
            <View style={[styles.columns, { flex: 3 }]}>
                <Text
                    style={[
                        styles.titleStyle,
                        { color: textColor || Colors.light.secondaryBrownDark },
                    ]}
                >
                    {title}
                </Text>
                <Text
                    style={[
                        styles.descriptionStyle,
                        { color: textColor || Colors.light.secondaryBrownDark },
                    ]}
                >
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        height: 152,
        marginBottom: 24,
    },
    columns: {
        padding: 16,
        justifyContent: "center",
    },
    lottieStyle: {
        width: 104,
    },
    titleStyle: {
        fontSize: 42,
        marginBottom: 8,
        fontFamily: "Lato"
    },
    descriptionStyle: {
        fontSize: 14,
        fontFamily: "Lato"
    },
});
