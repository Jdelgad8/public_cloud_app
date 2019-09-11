import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { addStudentMutation, getStudentsQuery } from '../../queries/queries';
import MenuButton from '../common/MenuButton';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      age: '',
      email: '',
      phone: '',
    }
  }

  submitForm() {
    this.props.addStudentMutation({
      variables: {
        full_name: this.state.full_name,
        age: this.state.age,
        gender: this.state.gender,
        email: this.state.email,
        phone: this.state.phone
      },
      refetchQueries: [{ query: getStudentsQuery }]
    });
    this.setState({
      full_name: '',
      age: '',
      email: '',
      phone: '',
    });
    return (
      <Text>
        Datos enviados correctamente
      </Text>
    );
  }

  render() {
    const {
      imageStyle,
      textInputStyle,
      formContainerStyle,
      buttonContainerStyle,
    } = Styles;

    return (
      <View>
        <MenuButton
          color='white'
          navigation={this.props.navigation}
        >
          Datos personales
        </MenuButton>
        <View>
          <Image
            source={require('../../assets/nube_publica.jpg')}
            style={imageStyle}
          />
        </View>
        <View titleFormContainer>
          <View style={formContainerStyle}>
            <TextInput
              onChangeText={(text) => this.setState({ full_name: text })}
              style={textInputStyle}
              placeholder="Nombres y apellidos"
              value={this.state.full_name}
            />
            <TextInput
              onChangeText={(text) => this.setState({ age: text })}
              style={textInputStyle}
              placeholder="Edad"
              value={this.state.age}
              keyboardType="numeric"
            />
            <TextInput
              onChangeText={(text) => this.setState({ email: text })}
              style={textInputStyle}
              placeholder="Email"
              value={this.state.email}
              keyboardType="email-address"
            />
            <TextInput
              onChangeText={(text) => this.setState({ phone: text })}
              style={textInputStyle}
              placeholder="Teléfono"
              value={this.state.phone}
              keyboardType="phone-pad"
            />
          </View>
          <View style={buttonContainerStyle}>
            <Button
              title="Enviar"
              onPress={this.submitForm.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const Styles = {
  imageStyle: {
    width: '100%',
    height: 250,
    marginTop: 20
  },
  textInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  formContainerStyle: {
    flexDirection: 'column',
    padding: 20
  },
  buttonContainerStyle: {
    width: '100%',
    alignItems: 'center'
  }
}

export default compose(
  graphql(getStudentsQuery, { name: "getStudentsQuery" }),
  graphql(addStudentMutation, { name: "addStudentMutation" })
)(Form);
