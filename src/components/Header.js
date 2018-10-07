import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 20 },
    shadowOppacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export default Header;
