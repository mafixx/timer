import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    text: string;
}

export function Button(props: Props){
    return(
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.Text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "#1d2528",
        justifyContent: "center",
        alignItems: "center" ,
        height: 72,
        width: 72,
        borderRadius: 36,
        margin: 5,
    },
    Text:{
        color: "#fff",
        fontSize: 40,
    }
})