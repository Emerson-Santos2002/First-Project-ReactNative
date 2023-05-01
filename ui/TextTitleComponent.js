import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { useFonts } from 'expo-font';

export default TextTitle = () => {

    let colorScheme = useColorScheme();

    const themeText = colorScheme === 'light' ? 
        styles.lightTheme : styles.darkTheme;

    const [fontLoaded] = useFonts({
        'NunitoSansRegular': require('../assets/fonts/NunitoSans-Regular.ttf')
    });

    return (

        <View style={{ flex: 1, paddingTop: 16 }}>

            <Text
                style={[
                    styles.text,
                    themeText,
                    { fontFamily: 'NunitoSansRegular' }
                ]}>
                Welcome!
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
    },
    lightTheme: {
        color: '#000000',
    },
    darkTheme: {
        color: '#ffffff',
    },
})