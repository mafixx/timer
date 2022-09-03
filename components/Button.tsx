import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/colors";

type Props = {
    title: string;
    onPress: VoidFunction;
    isGrey?: boolean;
    isPurple?: boolean;
    isBlue?: boolean;
    isSmall?: boolean;
    icon?: any;
    isRectangle?: boolean;
}

export function Button(props: Props){
    let backgroundColor = colors.button;
    let size = {
        height: 92,
        width: 92,
    };

    let borderRadius = 46;

    if (props.isGrey) {
        backgroundColor = colors.buttonGrey;
    } else if (props.isPurple) {
        backgroundColor = colors.buttonPurple;
    } else if (props.isBlue) {
        backgroundColor = colors.blue;
    }

    if (props.isSmall) {
        size = { height: 46, width: 46};
    }

    if(props.isRectangle){
        borderRadius = 20;
    }

    return (
        <TouchableOpacity style={[styles.button, {backgroundColor, ...size, borderRadius}]} onPress={props.onPress}>
            {props.icon}
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    button:{
        height: 92,
        width: 92,
        borderRadius: 46,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        margin: 5,
    },
    text: {
        color: "#fff",
        fontSize: 36,
    }
});