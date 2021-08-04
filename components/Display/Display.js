import React from 'react';
import Data from '../../seedData'
import { Image, Text, ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
function Display(props) {
    return (
            <View style={styles.background}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../../assets/AllCitylogoA.png')} />
                </View>
                <ScrollView>
                    {
                        Data.map((post, idx) => {
                            return (
                                <SafeAreaView key={idx}>
                                    <View style={styles.postContainer}>
                                        <View style={styles.postHeader}>
                                            <Text style={styles.postTitle}><Text style={{ fontWeight: "bold" }}>{post.author}</Text>{"\n"}Location: {post.location}</Text>
                                        </View>
                                        <Image style={styles.image} source={{uri: `${post.image_url}`}}/>
                                        <Text style={styles.text}><Text style={{ fontWeight: "bold" }}>{post.author}:</Text> {post.caption_body}</Text>
                                        <View style={styles.footer}>
                                            <Image style={styles.footerImage} source={require('../../assets/crown.png')} />
                                            <Image style={styles.footerImage} source={require('../../assets/roller.png')} />
                                        </View>
                                    </View>
                                </SafeAreaView>
                            )
                        })
                    }
                </ScrollView>
            </View>
    );
}
const styles = StyleSheet.create({
    background: {
        // flex: 1,
        // justifyContent: 'flex-end',
        backgroundColor: 'darkturquoise'
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    postTitle: {
        fontSize: 17,
        // padding: 0,
        marginTop: 10,
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start'
    },
    logo: {
        width: 300,
        height: 80,
        marginTop: 20,

        shadowColor: "#FF1493",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.85,
        shadowRadius: 5.00,
        elevation: 24,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold',
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    postContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 10,
        borderColor: 'yellow',
        borderWidth: 3,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 5.00,
        elevation: 5,
    },
    image: {
        width: 375,
        height: 375,
        marginTop: 10,
    },
    text: {
        fontSize: 17,
        padding: 5,
        marginHorizontal: 20,
        marginTop: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row'
    },
    footerImage: {
        height: 50,
        width: 50,
        marginHorizontal: 125,
        marginTop: 10,
        marginBottom: 10,
    }
})
export default Display;