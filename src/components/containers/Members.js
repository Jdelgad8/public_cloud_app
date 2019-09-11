import React, { Component } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import MenuButton from '../common/MenuButton';

export default class Members extends Component {
  render() {
    const { logoStyle, viewStyle, textStyle, textContainerStyle } = Styles;
    return (
      <View>
        <StatusBar hidden />
        <MenuButton
          color='white'
          navigation={this.props.navigation}
        >
          Integrantes
        </MenuButton>
        <View style={viewStyle}>
          <Image
            source={require('../../assets/members-img.png')}
            style={logoStyle}
          />
          <View style={textContainerStyle}>
            <Text style={textStyle}>
              Jordy Delgado
          </Text>
            <Text style={textStyle}>
              Valerin Correa
          </Text>
            <Text style={textStyle}>
              Laura Villota
          </Text>
          </View>
        </View>
      </View>
    );
  }
};

const Styles = {
  logoStyle: {
    height: 290,
    width: '100%',
    marginTop: 20,
  },
  viewStyle: {
    alignItems: 'center',
    width: '100%',
  },
  textStyle: {
    fontSize: 20,
    marginTop: 15,
    color: '#1687c5',
  },
  membersTextStyle: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '45%'
  }
}