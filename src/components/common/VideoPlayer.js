import { Video } from 'expo';
import React, { Component } from 'react';
import { View } from 'react-native';

export default class VideoPlayer extends Component {
  render() {
    const { videoStyle, videoContainerStyle } = Styles;
    return (
      <View style={videoContainerStyle}>
        <Video
          source={this.props.source}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          isLooping
          style={{ width: 300, height: 300 }}
          useNativeControls={true}
        />
      </View>
    );
  }
}

const Styles = {
  videoContainerStyle: {
    paddingTop: 20,
    width: '100%',
    alignItems: 'center',
  }
}