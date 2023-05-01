import React from "react";
import { View, Text, useColorScheme, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Animated ,{ useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default TextMessage = () => {

    let colorScheme = useColorScheme();

    const themeStyle = colorScheme === 'light' ?
        styles.lightTheme : styles.darkTheme

    const [fontLoaded] = useFonts({
        'NunitoSansSemiBold': require('../assets/fonts/NunitoSans-SemiBold.ttf')
    });

    const animatedPaddingHorizontal = useSharedValue(0);
    const animatedPaddingVertical = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            paddingHorizontal: animatedPaddingHorizontal.value,
            paddingVertical: animatedPaddingVertical.value
        };
    });

    React.useEffect(() => {
        animatedPaddingHorizontal.value = withTiming(32, { duration: 1000 }),
        animatedPaddingVertical.value = withTiming(8, { duration: 1000 });
    }, []);

    return (

        <View style={{ flex: 1 }}>

            <Animated.Text
                style={[
                    styles.text,
                    themeStyle,
                    { fontFamily: 'NunitoSansSemiBold' },
                    animatedStyle
                ]}>
                SplashScreenApp
            </Animated.Text>

        </View>

    );

}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    lightTheme: {
        color: '#ffffff',
        backgroundColor: '#000000'
    },
    darkTheme: {
        color: '#000000',
        backgroundColor: '#ffffff'
    }
});