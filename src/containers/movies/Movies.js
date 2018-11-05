import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from './action'

import MovieList from '../../components/BasicList'

class Movies extends Component {

  /*static navigationOptions = {
    header: <Header  />
  }*/

  state = {
    indicator: true,
    movies: [],
    searchOptions: null
  }
  
  componentDidMount() {
    this.props.fetchMovies()
  }

  async componentWillReceiveProps(nextProps) {
    // console.log(Object.keys(nextProps.Search).length)
    //console.log("search propovi ", nextProps.Search)
    await this.setState({
      indicator: nextProps.Movies.indicator,
      movies: nextProps.Movies.movies.results.slice(0, 10),
      searchOptions: Object.keys(nextProps.Search).length >= 3 ? nextProps.Search.search.results : null
    })
  }

  createMovieList = ({ item, index }) => {
    return (
      <MovieList
        onPress={() => this.props.navigation.navigate('ItemDetail', { item })}
        image={'https://image.tmdb.org/t/p/w500' + item.poster_path}
        title={item.title ? item.title : item.name}
      />
    )
  }

  filterData = () => {
    if (this.state.searchOptions) {
      //  return console.log("search ", this.state)
      return (
        <FlatList
          data={this.state.searchOptions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.createMovieList}
        />)
    }
    return (
      <FlatList
        data={this.state.movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.createMovieList}
      />)
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.state.indicator}
          color='#bc2b78'
          size="large" />
        {this.filterData()}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  return {
    Movies: state.MoviesReducer,
    Search: state.SearchReducer
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchMovies: fetchMovies,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Movies)