import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(album => this.setState({ albums: album }));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}
