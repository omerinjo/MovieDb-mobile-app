import React from 'react'
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const MovieList = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image source={{ uri: props.image }} style={styles.image} />
            <Text style={styles.text}> {props.title}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        height: 70,
    },
    image: {
        width: 65,
        height: 65,
        borderRadius:50,
        marginLeft:10,
        borderWidth:2,
        borderColor:'#171F33'
    },
    text:{
        color:'black',
        marginLeft:10,
        fontSize:16
    }
});

export default MovieList