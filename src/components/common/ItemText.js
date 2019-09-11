import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ItemText extends Component {
  render() {
    const { textContainerStyle, textStyle } = Styles;
    return (
      <View style={textContainerStyle}>
        <Icon
          name={this.props.name}
          color='#1687c5'
          size={20}
        />
        <Text style={textStyle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const Styles = {
  textContainerStyle: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 15,
    color: '#1687c5',
    paddingLeft: 10,
    textAlign: 'justify',
  },
}