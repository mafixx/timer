import { StyleSheet, Text } from "react-native";
import { colors } from "../../../styles/colors";

type Props = {
    title: string;
    subtitle: string;
}

export function TimeText(props: Props){
    return(
        <Text style={styles.title}>
            {props.title}<Text style={styles.subtitle}>{props.subtitle}</Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 72,
        marginHorizontal: 10,
        color: colors.timerText,
    },
    subtitle: {
        fontSize: 32,
    }
})