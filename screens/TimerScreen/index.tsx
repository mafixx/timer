import { AnimatedCircularProgress } from "react-native-circular-progress";
import { colors } from "../../styles/colors";
import { Dimensions, Text, View, StyleSheet } from "react-native";
import { Button } from "../../components/Button";
import { Feather } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { useTimer } from "../../contexts/TimerContext";
import { useEffect, useRef, useState } from "react";

const screenWidth = Dimensions.get("screen").width;

type Props = {
    toggleScreen: VoidFunction;
}

export function TimerScreen(props: Props) {
    const {timer} = useTimer();
    const [ remainingSeconds, setRemaningSecs ] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<NodeJS.Timeout>(null!);
    const initialValue = useRef(0);

    useEffect(() =>{
        // Transformar a string timer para o tempo em segundos
        
        // Acrescentar 0 ao valor de timer até que ele possua 6 caracteres
        const formattedTimer = timer.padStart(6, "0");
        // 00:00:00
        const hours = +formattedTimer.slice(0, 2);
        const minutes = +formattedTimer.slice(2, 4);
        const seconds = +formattedTimer.slice(4, 6);

        const remainingSeconds = hours * 3600 + minutes * 60 + seconds;
        
        initialValue.current = remainingSeconds;
        setRemaningSecs(remainingSeconds);


        // Definir um intervalo timeOut, que irá remover os segundos do timer
    }, []);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            if (remainingSeconds){
                setRemaningSecs(remainingSeconds -1);
            }
        }, 1000);
    }, [remainingSeconds])
    

    /**
     * getRemainingHours retorna a quantidade de horas com base nos segundos
     */
    function getRemainingHours(){
        const hours = Math.floor(remainingSeconds / 3600);

        return hours < 10 ? "0" + hours : hours;
    }

       /**
     * getRemainingMinutes retorna a quantidade de horas com base nos segundos
     */
    function getRemainingMinutes(){
        const minutes = Math.floor((remainingSeconds /60) % 60);

        return minutes < 10 ? "0" + minutes : minutes;
        }

        /**
     * getRemainingSeconds retorna a quantidade de horas com base nos segundos
     */
    function getRemainingSeconds(){
        const seconds = remainingSeconds % 60;

        return seconds < 10 ? "0" + seconds : seconds;
    }
    /**
     * Função de pausar o timer
     */

    function pauseTimer(){
        clearTimeout(timerRef.current);
        setIsPaused(true);
    }

    /**
     * Função de resumir o pause
     */

    function resumeTimer(){
        if (remainingSeconds){
            setRemaningSecs(remainingSeconds -1);
            setIsPaused(false);
        }
    }

    return (
        <View>
            <View style={styles.circleContainer}>
                <AnimatedCircularProgress
                    size={screenWidth * .8}
                    width={5}
                    // initialValue => 100%
                    // remainingSeconds => x
                    // remainingSeconds * 100 / initialValue * x
                    fill={remainingSeconds *100 / initialValue.current}
                    tintColor={colors.blue}
                    backgroundColor={"#3D5875"}
                >
                    {
                        () => <Text style={styles.text}>{getRemainingHours()}:{getRemainingMinutes()}:{getRemainingSeconds()}</Text>
                    }
                </AnimatedCircularProgress>
            </View>
            <View style={styles.buttonsContainer}>
                {
                    !!remainingSeconds &&
                    <Button 
                    icon={<Feather name="trash-2" size={24} color="#fff" />} 
                    title="" 
                    onPress={props.toggleScreen} 
                    isPurple
                    isSmall
                />
                }
                {
                    !remainingSeconds ?
                <Button 
                    icon={<Entypo name="plus" size={24} color="#fff" />} 
                    title="" 
                    onPress={props.toggleScreen} 
                    isBlue 
                    isRectangle
                />
                :
                    isPaused ?
                <Button 
                    icon={<Entypo name="controller-play" size={24} color="#fff" />} 
                    title="" 
                    onPress={resumeTimer} 
                    isBlue 
                    isRectangle
                />
                :
                <Button 
                    icon={<Entypo name="controller-paus" size={24} color="#fff" />} 
                    title="" 
                    onPress={pauseTimer} 
                    isBlue 
                    isRectangle
                />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 60
    },
    circleContainer: {
        marginTop: 40,
        flex: 1
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    }
});