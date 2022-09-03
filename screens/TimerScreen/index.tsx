import { Text, View, StyleSheet, Dimensions } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button } from "../../components/Button";
import { colors } from "../../styles/colors";
import { Feather } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

const screenWidth = Dimensions.get("screen").width;

type Props = {
    toggleScreen: VoidFunction;
}

export function TimerScreen(props: Props) {
    return (
        <View>
            <View style={styles.circleContainer}>
                <AnimatedCircularProgress
                    size={screenWidth * .8}
                    width={5}
                    fill={100}
                    tintColor={colors.blue}
                    backgroundColor={"#3d5875"}
                >
                    {
                        () => <Text style={styles.text}>0:0:0</Text>
                    }

                </AnimatedCircularProgress>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    icon={<Feather
                        name="trash-2"
                        size={24}
                        color="#fff" />}
                    title=""
                    onPress={(props.toggleScreen)}
                    isPurple
                    isSmall
                />
                <Button
                    icon={<Entypo name="controller-paus" size={24} color="#fff" />}
                    title=""
                    onPress={() => {}}    
                    isBlue 
                    isRectangle
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 60,
    },
    circleContainer: {
        flex: 1,
        marginTop: 150,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
    },

})