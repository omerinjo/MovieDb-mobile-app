import React from 'react'
import { Text, Image, StyleSheet, Dimensions, ScrollView, View } from 'react-native'

const ItemDetail = (props) => {
    const item = props.navigation.state.params.item
    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title ? item.title : item.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }} style={styles.image} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.text}> {item.overview} </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    titleContainer: {
        flex: 1
    },
    title: {
        fontSize: 25
    },
    imageContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems:'center'
    },
    image: {
        flex: 1,
        width: Dimensions.get('window').width-85,
        height: Dimensions.get('window').height / 2
    },
    contentContainer: {
        flex: 5
    },
    text: {
        fontSize: 15,
        color: 'black'
    }

});

export default ItemDetail