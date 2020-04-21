import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Image, Text, ImageBackground, ScrollView, ImageSourcePropType, ShadowPropTypesIOS, ImageBackgroundBase } from 'react-native';
import { Typography, Colors } from './styles'

const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.headerMenu}>
                <Image source={require('./res/ico_menu.png')} style={styles.headerMenuLeft}></Image>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>RECIPE APP</Text>
            <TouchableOpacity style={styles.headerMenu}>
                <Image source={require('./res/ico_avatar.png')} style={styles.headerMenuRight}></Image>
            </TouchableOpacity>
        </View>
    );
}

const Footer = () => {
    return (
        <ImageBackground source={require('./res/footer_bg.png')} style={styles.footer}>
            <TouchableOpacity style={styles.footerMenu}>
                <Image source={require('./res/home.png')} style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerMenu}>
                <Image source={require('./res/hat.png')} style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerMenuLarge}>
                <Image source={require('./res/search.png')} style={styles.footerIconLarge} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerMenu}>
                <Image source={require('./res/bookmark.png')} style={styles.footerIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerMenu}>
                <Image source={require('./res/setting.png')} style={styles.footerIcon} />
            </TouchableOpacity>
        </ImageBackground >
    );
}

const PromoItem = (props: {
    title: string,
    description: string,
    image: ImageSourcePropType
}) => {
    return (
        <TouchableOpacity>
            <ImageBackground imageStyle={[styles.borderRadius, styles.resizeMode]} style={styles.promo} source={props.image}>
                <Text style={styles.promoTitle}>{props.title}</Text>
                <Text style={styles.promoDescription}>{props.description}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const Promo = () => {
    return (
        <View>
            <Text style={styles.titleLarge}>Promo recipe</Text>
            <ScrollView nestedScrollEnabled={true} horizontal={true} style={styles.promoArea} showsHorizontalScrollIndicator={false}>
                <PromoItem title="Soup" description="Soup with cooked mushroms" image={require('./res/recipe1.png')} />
                <PromoItem title="Soup" description="Cream with mustard" image={require('./res/recipe2.png')} />
            </ScrollView>
        </View>
    );
}

const RecipeItem = (props: {
    name: string,
    image: ImageSourcePropType
}) => {
    return (
        <TouchableOpacity style={styles.recipeItem}>
            <Image source={require('./res/button_bg.png')}
                style={styles.recipeItemBackground} />
            <View style={styles.recipeContent}>
                <Image source={props.image}
                    style={styles.recipeIcon} />
                <Text style={styles.recipeName}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const Recipe = () => {
    return (
        <View style={styles.recipeTypeArea} >
            <View style={styles.recipeTypeRow}>
                <RecipeItem name="Vege" image={require('./res/carrots.png')} />
                <RecipeItem name="Main dishes" image={require('./res/main_dishes.png')} />
                <RecipeItem name="Cakes" image={require('./res/cake.png')} />
            </View>
            <View style={styles.recipeTypeRow}>
                <RecipeItem name="Fast food" image={require('./res/fast_food.png')} />
                <RecipeItem name="Kid's menu" image={require('./res/kid_menu.png')} />
                <RecipeItem name="Soup" image={require('./res/soup.png')} />
            </View>
        </View>
    );
}

const Compose = () => {
    return (
        <ImageBackground imageStyle={styles.borderRadius} style={styles.composeArea} source={require('./res/compose_bg.png')}>
            <Text style={styles.composeDescription}>Compose your own meal</Text>
            <TouchableOpacity style={styles.composeButton}>
                <ImageBackground imageStyle={styles.resizeMode} style={styles.composeBorder} source={require('./res/compose_button.png')}>
                    <Text style={styles.composeTitle}>Compose meal</Text>
                </ImageBackground>
            </TouchableOpacity>
        </ImageBackground>
    );
};

class Home extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Header />
                    <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
                        <Promo />
                        <Recipe />
                        <Compose />
                    </ScrollView>
                    <Footer />
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerMenu: {
        width: 60,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerMenuLeft: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    headerMenuRight: {
        width: 45,
        height: 45,
        resizeMode: 'contain'
    },
    headerTitle: {
        ...Typography.smallTextOrange,
        fontWeight: 'bold'
    },
    body: {
        flex: 1,
    },
    footer: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    footerMenu: {
        height: 50,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerMenuLarge: {
        height: '100%',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    },
    footerIconLarge: {
        height: 90,
        width: 90,
        top: -10,
        resizeMode: 'contain'
    },
    titleLarge: {
        ...Typography.largeTextBlack,
        margin: 15,
    },
    promoArea: {
        height: 200,
        width: '100%',
    },
    promo: {
        height: '100%',
        width: 300,
        marginLeft: 15,
        resizeMode: 'contain'
    },
    promoTitle: {
        ...Typography.superSmallTextWhite,
        position: 'absolute',
        left: 20,
        bottom: 45
    },
    promoDescription: {
        ...Typography.textWhite,
        position: 'absolute',
        left: 20,
        bottom: 25
    },
    recipeTypeArea: {
        width: '100%',
        marginTop: 15,
    },
    recipeTypeRow: {
        height: 100,
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 5,
    },
    recipeItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    recipeItemBackground: {
        flex: 1,
    },
    recipeContent: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    recipeIcon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    recipeName: {
        ...Typography.superSmallTextGrey,
        marginTop: 5
    },
    composeArea: {
        flex: 1,
        height: 150,
        margin: 15,
        flexDirection: 'column'
    },
    composeButton: {
        height: 50,
        width: 150,
        position: 'absolute',
        right: 20,
        bottom: 20,
    },
    composeBorder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    composeTitle: {
        ...Typography.smallTextWhite,
        fontWeight: 'bold',
    },
    composeDescription: {
        ...Typography.largeTextWhite,
        fontWeight: 'bold',
        width: 150,
        right: 20,
        bottom: 65,
        position: 'absolute',
        textAlign: 'center'
    },
    borderRadius: {
        borderRadius: 10,
    },
    resizeMode: {
        resizeMode: 'contain',
    }
});

export default Home;