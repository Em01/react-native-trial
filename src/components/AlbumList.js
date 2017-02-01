import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
//
class AlbumList extends Component {
  state = { albums: [] }

  componentWillMount () {
    axios('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data}))
    // .then((responseData) => {
    //   console.log(responseData)
    // })
  }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>)
  }

  render () {
    console.log(this.state)
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList;
