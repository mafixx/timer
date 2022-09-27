import { StyleSheet, View } from "react-native";
import { useTimer } from "../../../contexts/TimerContext";
import { TimeText } from "./TimeText";

export function Display() {
    const { timer } = useTimer();

    function getHours(): string {
        let hours = "00";

        switch (timer.length) {
            case 5:
                hours = "0" + timer[0];
                break;
            case 6:
                hours = timer.slice(0, 2);
                break;
        }

        return hours;
    }

    function getMinutes(): string {
        let minutes = "00";

        switch (timer.length) {
            case 3:
                minutes = "0" + timer[0];
                break;
            case 4:
                minutes = timer.slice(0, 2);
                break;
            case 5:
                minutes = timer.slice(1, 3);
                break;
            case 6:
                minutes = timer.slice(2, 4);
        }

        return minutes;
    }

    function getSeconds(): string {
        if (timer.length == 0) {
            return "00";
        }

        if (timer.length === 1) {
            return "0" + timer[0];
        }

        return timer.slice(timer.length - 2, timer.length);
    }

    return (
        <View style={styles.container}>
            <TimeText title={getHours() || "00"} subtitle="h" />
            <TimeText title={getMinutes() || "00"} subtitle="m" />
            <TimeText title={getSeconds() || "00"} subtitle="s" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingTop: 40
    }
});