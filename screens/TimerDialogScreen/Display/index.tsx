import { StyleSheet, View } from "react-native";
import { useTimer } from "../../../context/TimerContext";
import { TimeText } from "./TimeText";

export function Display(){
const { timer } = useTimer();

function getHours(): string{
    let hours = "00";

    switch (timer.length){
        case 5:
            hours = "0" + timer[0];
            break;
        case 6:
            hours = timer.slice(0,2);
            break;
    }
    return hours;

}

function getMinutes(): string{
    let minutes = "00";

    switch (timer.length) {
        case 3:
            minutes = "0" + timer[0];
            break;
        case 4:
            minutes = timer.slice(0,2);
            break;
        case 5: 
            minutes = timer.slice(1,3);
            break;
        case 6: 
            minutes = timer.slice(2,4);
    }
    return minutes;
}

function getSeconds(): string{
    let seconds = "00";

    switch(timer.length) {
        case 1:
            seconds = "0" + timer[0];
            break;
        case 2:
            seconds = timer.slice(0,2);
            break;
        case 3:
            seconds = timer.slice(1,3);
            break;
        case 4: 
            seconds = timer.slice(2,4);
            break;
        case 5:
            seconds = timer.slice(3,5);
            break;
        case 6:
            seconds = timer.slice(4,6);
    }
    return seconds;
}

    return(
        <View style={styles.container}>
            <TimeText title={getHours() || "00"} subtitle="h" />
            <TimeText title={getMinutes() || "00"} subtitle="m" />
            <TimeText title={getSeconds() || "00"} subtitle="s" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        paddingTop: 50,
        justifyContent: "center"
    }
});