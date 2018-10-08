import React from 'react';
import { View } from 'react-native';

const Card = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

const styles = {
  containerStyle: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  }
};

export default Card;
