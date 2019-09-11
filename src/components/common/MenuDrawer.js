import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MenuDrawer extends Component {
  printIcon(text) {
    switch (text) {
      case 'Integrantes':
        return <Icon
          name="users"
          color='#1687c5'
          size={25}
        />
      case 'Formulario':
        return <Icon
          name="list"
          color='#1687c5'
          size={25}
        />

      case 'Definición':
        return <Icon
          name="pencil"
          color='#1687c5'
          size={25}
        />

      case 'Beneficios':
        return <Icon
          name="bookmark"
          color='#1687c5'
          size={25}
        />

      case 'Ventajas':
        return <Icon
          name="search-plus"
          color='#1687c5'
          size={25}
        />

      case 'Desventajas':
        return <Icon
          name="search-minus"
          color='#1687c5'
          size={25}
        />

      case 'Ejemplos':
        return <Icon
          name="cloud"
          color='#1687c5'
          size={25}
        />
      case 'Aportes':
        return <Icon
          name="rocket"
          color='#1687c5'
          size={25}
        />

      case 'Asistentes':
        return <Icon
          name="list-alt"
          color='#1687c5'
          size={25}
        />

      default:
        return <Text>
          Menu item incorrecto!
      </Text>
    }
  }

  navLink(nav, text) {
    return (
      <TouchableOpacity style={Styles.linkMenuStyle} onPress={() => this.props.navigation.navigate(nav)}>
        {this.printIcon(text)}
        <Text style={Styles.textStyle}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
  render() {
    const { containerStyle, topMenuStyle, bottomMenuStyle, logoContainerStyle, logoStyle, topTextStyle } = Styles;
    return (
      <View style={containerStyle}>
        <View style={topMenuStyle}>
          <View style={logoContainerStyle}>
            <Image style={logoStyle} source={require('../../assets/ucc-logo.png')} />
          </View>
          <Text style={topTextStyle}>Public Cloud</Text>
        </View>
        <ScrollView style={bottomMenuStyle}>
          {this.navLink('Members', 'Integrantes')}
          {this.navLink('Form', 'Formulario')}
          {this.navLink('Definition', 'Definición')}
          {this.navLink('Benefits', 'Beneficios')}
          {this.navLink('Advantage', 'Ventajas')}
          {this.navLink('Disadvantage', 'Desventajas')}
          {this.navLink('CloudImages', 'Ejemplos')}
          {this.navLink('Contributions', 'Aportes')}
          {this.navLink('Assistants', 'Asistentes')}
        </ScrollView>
      </View>
    );
  }
}

const Styles = {
  containerStyle: {
    flex: 1,
  },
  topTextStyle: {
    flex: 1,
    fontSize: 25,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold'
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
    color: '#1687c5'
  },
  topMenuStyle: {
    height: 160,
    backgroundColor: '#1687c5',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#777777'
  },
  bottomMenuStyle: {
    flex: 1,
    backgroundColor: "white",
  },
  linkMenuStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  logoContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 10
  },
  logoStyle: {
    height: 70,
    width: 70,
    borderRadius: 50
  }
}
