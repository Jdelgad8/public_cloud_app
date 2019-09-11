import React, { Component } from 'react';
import { View } from 'react-native';
import MenuButton from '../common/MenuButton';
import VideoPlayer from '../common/VideoPlayer';


export default class Definition extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <MenuButton
          color='white'
          navigation={this.props.navigation}
        >
          ¿Qué es la nube pública?
        </MenuButton>
        <VideoPlayer source={require('../../assets/videos/definition.mp4')} />
      </View>
    );
  }
}