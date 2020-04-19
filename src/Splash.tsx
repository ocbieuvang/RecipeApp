import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { RootStackParam } from './routes';
import { StackNavigationProp } from '@react-navigation/stack';

type SplashScreenNavigationProp = StackNavigationProp<
    RootStackParam,
    'Splash'
>;

type Props = {
    navigation: SplashScreenNavigationProp;
};

class Splash extends React.PureComponent<Props> {
    render() {
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
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home')
        }, 2000)
    }
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