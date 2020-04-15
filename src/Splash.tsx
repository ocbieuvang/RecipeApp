import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

const Splash = () => {
    return (
        <ImageBackground source={require('./res/splash_bg.png')} style={styles.container}>
            <View style={styles.content}>
                <Image source={require('./res/logo.png')} style={styles.logo} />
                <Text style={styles.slogan}>
                    <Text>RECIPE </Text>
                    <Text style={styles.textBold}>APP</Text>
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    content: {
        height: '75%',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    slogan: {
        color: '#FFF4E4',
        fontSize: 42,
        marginTop: 30,
    },
    textBold: {
        fontWeight: 'bold'
    }
});

export default Splash;