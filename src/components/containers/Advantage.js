import React, { Component } from 'react';
import { Image, View } from 'react-native';
import ItemText from '../common/ItemText';
import MenuButton from '../common/MenuButton';

export default class Advantage extends Component {
  render() {
    const { viewStyle, logoStyle, textContainerStyle, textStyle, benefitTextContainerStyle, subtitleStyle } = Styles;
    return (
      <View>
        <MenuButton
          color='white'
          navigation={this.props.navigation}
        >
          Ventajas
        </MenuButton>
        <Image
          source={require('../../assets/ventajas.png')}
          style={logoStyle}
        />
        <View style={textContainerStyle}>
          <ItemText name="check">
            Acceso por Internet en su totalidad
          </ItemText>
          <ItemText name="check">
            Disponibilidad de los servicios
          </ItemText>
          <ItemText name="check">
            Flexibilidad en el servicio
          </ItemText>
          <ItemText name="check">
            Sin contrato de permanencia
          </ItemText>
          <ItemText name="check">
            Mayor facilidad de trabajos colaborativos
          </ItemText>
          <ItemText name="check">
            Interfaz de administración y programación
          </ItemText>
          <ItemText name="check">
            Posibilidad de combinar ambientes
          </ItemText>
        </View>
      </View >
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
  textContainerStyle: {
    padding: 30,
    paddingTop: 10
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


