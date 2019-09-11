import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ItemText from '../common/ItemText';
import MenuButton from '../common/MenuButton';

export default class Disadvantage extends Component {
  render() {
    const { textContainerStyle, subtitleStyle, logoStyle } = Styles;
    return (
      <View>
        <MenuButton
          color='white'
          navigation={this.props.navigation}
        >
          Desventajas
        </MenuButton>
        <View style={textContainerStyle}>
          <Text style={subtitleStyle}>
            Seguridad y privacidad
          </Text>
          <ItemText name="close">
            Es preciso un buen plan para poder garantizar una protección que, en muy pocos casos llegará a blindarlos al 100% de la amenaza externa o interna.
          </ItemText>
          <Text style={subtitleStyle}>
            Interrupciones
          </Text>
          <ItemText name="close">
            Hoy en dia, no existe proveedor de la nube que pueda garantizar que no se experimentará ningún periodo de inactividad del servicio,ralentizacion o interrunciones frecuentes.
          </ItemText>
          <Text style={subtitleStyle}>
            Condiciones de servicio
          </Text>
          <ItemText name="close">
            Determinados proveedores de nube, imponen cláusulas que limitan la maniobrabilidad sobre la información.
          </ItemText>
          <Text style={subtitleStyle}>
            Transparencia
          </Text>
          <ItemText name="close">
            Muchas organizaciones no tienen claro en quién recae la propiedad de los datos que se alojan en la nube.
          </ItemText>
        </View>
      </View>
    );
  }
}

const Styles = {
  textContainerStyle: {
    justifyContent: 'space-between',
    height: '90%',
    marginTop: 10
  },
  subtitleStyle: {
    textAlign: 'center',
    color: '#1687c5',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10
  },
  logoStyle: {
    height: 350,
    width: '100%',
    marginTop: 20,
  },
}

