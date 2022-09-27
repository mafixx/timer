import { StyleSheet, View } from "react-native";
import { Button } from "../../../components/Button";
import { useTimer } from "../../../contexts/TimerContext";

type Props = {
    toggleScreen: VoidFunction;
}

export function Keyboard(props: Props) {
    const { timer, setTimer } = useTimer();

    function onKeyPress(key: string) {
        if (timer.length == 6) {
            return;
        }

        setTimer(prev => prev + key);
    }

    function onBackspacePress() {
        if (timer.length) {
            setTimer(prev => prev.slice(0, -1));
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Button title="1" onPress={() => onKeyPress("1")} />
                <Button title="2" onPress={() => onKeyPress("2")} />
                <Button title="3" onPress={() => onKeyPress("3")} />
            </View>
            <View style={styles.row}>
                <Button title="4" onPress={() => onKeyPress("4")} />
                <Button title="5" onPress={() => onKeyPress("5")} />
                <Button title="6" onPress={() => onKeyPress("6")} />
            </View>
            <View style={styles.row}>
                <Button title="7" onPress={() => onKeyPress("7")} />
                <Button title="8" onPress={() => onKeyPress("8")} />
                <Button title="9" onPress={() => onKeyPress("9")} />
            </View>
            <View style={styles.row}>
                <Button title="00" onPress={() => onKeyPress("00")} />
                <Button title="0" onPress={() => onKeyPress("0")} />
                <Button title="⌫" onPress={onBackspacePress} isGrey />
            </View>
            <View style={styles.footerButton}>
                {
                    !!timer.length && <Button title="▶" onPress={props.toggleScreen} isBlue />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    row: {
        flexDirection: "row",
        justifyContent: "center"
    },
    footerButton: {
        marginTop: 30,
        alignItems: "center"
    }
});