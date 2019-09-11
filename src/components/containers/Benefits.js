import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import ItemText from '../common/ItemText';
import MenuButton from '../common/MenuButton';

export default class Benefits extends Component {
  render() {
    const {
      viewStyle,
      logoStyle,
      benefitTextContainerStyle,
      textContainerStyle,
      subtitleStyle,
      textStyle
    } = Styles;
    return (
      <View>
        <MenuButton
          color='white'
          navigation={this.props.navigation}
        >
          Beneficios
        </MenuButton>
        <View style={viewStyle}>
          <Image
            source={require('../../assets/beneficios.png')}
            style={logoStyle}
          />
          <View style={textContainerStyle}>
            <Text style={subtitleStyle}>
              Los principales beneficios del uso de un servicio de nube pública son:
            </Text>
            <ItemText name="star">
              Configuración fácil y económica, ya que el proveedor cubre los costos de hardware, aplicaciones y ancho de banda.
            </ItemText>
            <ItemText name="star">
              Escalabilidad para satisfacer las necesidades.
            </ItemText>
            <ItemText name="star">
              No desperdicia recursos porque paga por lo que usa.
            </ItemText>
          </View>
        </View>
      </View>
    );
  }
}

const Styles = {
  logoStyle: {
    height: 300,
    width: '100%',
    marginTop: 20,
  },
  viewStyle: {
    alignItems: 'center',
    width: '100%',
  },
  textStyle: {
    fontSize: 15,
    color: '#1687c5',
    paddingLeft: 10,
    textAlign: 'justify',
  },
  membersTextStyle: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  subtitleStyle: {
    textAlign: 'justify',
    color: '#1687c5',
    fontWeight: 'bold',
    fontSize: 20
  },
  benefitTextContainerStyle: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'center'
  }
}