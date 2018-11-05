import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearch, resetSearch } from './action'

class Header extends Component {

    handleChange = (query) => {
        var key = this.props.option.key
        if (query.length >= 3) {
            return this.props.fetchSearch(query, key)
        }
        else if (query.length < 3) {
            this.props.resetSearch()
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.appTitleContainer}>
                    <Text style={styles.apptitle}> An App</Text>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchImput} onChangeText={(query) => this.handleChange(query)} placeholder='Search...' />
                </View>
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon name="search" size={30} color="black" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        display: 'flex',
        flexDirection: 'row'
    },
    appTitleContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: "center"
    },
    apptitle: {
        fontSize: 20,
        color: 'black'
    },
    searchContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: "center"
    },
    
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
});

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchSearch: fetchSearch,
        resetSearch: resetSearch
    }, dispatch)
}
export default connect(null, matchDispatchToProps)(Header)