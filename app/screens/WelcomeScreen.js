import { ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton'

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <AppButton title="SIGN UP" onPress={() => navigation.navigate("ImageModal")}></AppButton>
            <AppButton title="LOGIN" onPress={() => navigation.navigate("ViewImage")}></AppButton>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        flexDirection: "row"
    },
    logo: {
        width: 250,
        height: 50,
        position: 'absolute',
        top: "10%",
        opacity: 0.5,
        borderRadius: 20
    }
})