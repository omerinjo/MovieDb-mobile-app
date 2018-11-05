import React, { Component } from 'react'
import { Text, View, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTvShow } from './action'

import TvShowList from '../../components/BasicList'

class TvShow extends Component {

  state = {
    indicator: true,
    tvshow: [],
    searchOptions: null
  }

  componentDidMount() {
    this.props.fetchTvShow()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      indicator: nextProps.TvShow.indicator,
      tvshow: nextProps.TvShow.tvshow.results.slice(0, 10),
      searchOptions: Object.keys(nextProps.Search).length >= 3 ? nextProps.Search.search.results : null
    })
    // console.log(tv)
  }

  createTvShowList = ({ item, index }) => {
    return (
      <TvShowList
        onPress={() => this.props.navigation.navigate('ItemDetail', { item })}
        image={'https://image.tmdb.org/t/p/w500' + item.poster_path}
        title={item.name}
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
          renderItem={this.createTvShowList}
        />)
    }
    return (
      <FlatList
        data={this.state.tvshow}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.createTvShowList}
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

const mapStateToProps = (state) => {
  return {
    TvShow: state.TvShowReducer,
    Search: state.SearchReducer
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTvShow: fetchTvShow,
  }, dispatch)
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(mapStateToProps, matchDispatchToProps)(TvShow)