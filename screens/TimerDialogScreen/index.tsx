import { StyleSheet, View } from "react-native";
import { Display } from "./Display";
import { Keyboard } from "./Keyboard";

type Props = {
    toggleScreen: VoidFunction;
}

export function TimerDialogScreen(props: Props) {
    return (
        <View style={styles.container}>
            <Display />
            <Keyboard toggleScreen={props.toggleScreen} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});