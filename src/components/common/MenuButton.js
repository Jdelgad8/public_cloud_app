import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MenuButton extends Component {
  render() {
    const { menuButtonStyle, containerStyle, titleStyle } = Styles;
    return (
      <View style={containerStyle}>
        <Icon
          name="bars"
          color='#1687c5'
          size={25}
          style={menuButtonStyle}
          onPress={() => this.props.navigation.toggleDrawer()}
        />
        <Text style={titleStyle}>
          {this.props.children}
        </Text>
        <Icon
          name="refresh"
          color={this.props.color}
          size={25}
          style={menuButtonStyle}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

const Styles = {
  menuButtonStyle: {
    padding: 10,
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1687c5',
    paddingTop: 5
  }
}