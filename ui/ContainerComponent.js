import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

import TextTitleComponent from './TextTitleComponent.js';
import TextMessageComponent from './TextMessageComponent.js';

SplashScreen.preventAutoHideAsync();

export default Container = () => {
    
    const [fontLoaded, setFontLoaded] = useState(false);
    
    useEffect(() => {
        async function loadFonts() {
            await SplashScreen.hideAsync();
            await Font.loadAsync({
                'NunitoSansRegular': require('../assets/fonts/NunitoSans-Regular.ttf'),
                'NunitoSansSemiBold': require('../assets/fonts/NunitoSans-SemiBold.ttf')
            });
            setFontLoaded(true);
        }
        loadFonts();
    }, []);

    let colorScheme = useColorScheme();
    const insets = useSafeAreaInsets();

    const themeContainer = colorScheme === 'light' ? 
        styles.lightTheme : styles.darktheme

    const onLayoutRootView = useCallback(async () => {
        setTimeout(async () => {
            await SplashScreen.hideAsync();
        }, 500);
    }, [SplashScreen.hideAsync()]);    

    if(!fontLoaded){
        return null;
    }

    return (
        <View style={[styles.container, themeContainer, { paddingTop: insets.top }]}
            onLayout={onLayoutRootView} >

            <StatusBar style="light" />
            <TextTitleComponent />
            <TextMessageComponent />

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    lightTheme: {
        backgroundColor: '#ffffff',
    },
    darktheme: {
        backgroundColor: '#000000',
    },
})