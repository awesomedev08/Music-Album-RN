import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = props => (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );

export default AlbumDetail;
