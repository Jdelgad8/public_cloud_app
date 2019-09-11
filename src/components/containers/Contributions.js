import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MenuButton from '../common/MenuButton';
import VideoPlayer from '../common/VideoPlayer';


export default class Definition extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { textContainerStyle, textStyle } = Styles;
    return (
      <View>
        <MenuButton
          color='white'
          navigation={this.props.navigation}
        >
          Aportes
        </MenuButton>
        <VideoPlayer source={require('../../assets/videos/contribution.mp4')} />
        <View style={textContainerStyle}>
          <Text style={textStyle}>
            José María Sánchez, General Manager & Corporate VP de Prodware en España, explica cuáles son los beneficios de la nube pública y por qué cada vez las empresas confían más en ella
          </Text>
        </View>
      </View>
    );
  }
}

const Styles = {
  textContainerStyle: {
    width: '100%',
    padding: 30,
    alignItems: 'center'
  },
  textStyle: {
    color: '#1687c5',
    fontSize: 15,
    textAlign: 'justify'
  }
}