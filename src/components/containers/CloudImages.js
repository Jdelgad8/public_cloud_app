import React, { Component } from 'react';
import { Image, ScrollView, View } from 'react-native';
import MenuButton from '../common/MenuButton';

export default class CloudImages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imageStyle, amazonImageStyle, imageContainerStyle, azureImageStyle } = Styles;
    return (
      <View>
        <MenuButton
          color='white'
          navigation={this.props.navigation}
        >
          Ejemplos
        </MenuButton>
        <ScrollView style={imageContainerStyle} >
          <Image
            source={require('../../assets/amazon.png')}
            style={amazonImageStyle}
          />
          <Image
            source={require('../../assets/dropbox.png')}
            style={imageStyle}
          />
          <Image
            source={require('../../assets/google-drive.png')}
            style={imageStyle}
          />
          <Image
            source={require('../../assets/i-cloud.png')}
            style={imageStyle}
          />
          <Image
            source={require('../../assets/microsoft-azure.png')}
            style={azureImageStyle}
          />
        </ScrollView>
      </View>
    );
  }
}

const Styles = {
  imageStyle: {
    width: '90%',
    height: 350
  },
  amazonImageStyle: {
    width: '100%',
    height: 250
  },
  azureImageStyle: {
    width: '100%',
    height: 120,
    marginVertical: 40
  },
  imageContainerStyle: {
    marginBottom: 40
  }
}
