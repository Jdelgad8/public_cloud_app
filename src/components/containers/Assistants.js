import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { deleteStudentMutation, getStudentsQuery } from '../../queries/queries';
import MenuButton from '../common/MenuButton';

class Assistants extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  displayStudentsDetails() {
    const { students, loading } = this.props.getStudentsQuery;
    if (loading) {
      return (
        <View style={Styles.spinnerContainerStyle}>
          <ActivityIndicator size="large" color="#1687c5" />
        </View>
      );
    } else {
      return students.map(student => {
        return (
          <View key={student.id} style={Styles.studentContainerStyle}>
            <View>
              <Text style={Styles.studentSubtitleStyle}>
                Nombre completo:
              </Text>
              <Text style={Styles.fullNameTextStyle}>
                {student.full_name}
              </Text>
              <Text style={Styles.studentSubtitleStyle}>
                Email:
              </Text>
              <Text style={Styles.fullNameTextStyle}>
                {student.email}
              </Text>
              <Text style={Styles.studentSubtitleStyle}>
                Edad:
              </Text>
              <Text style={Styles.fullNameTextStyle}>
                {student.age}
              </Text>
              <Text style={Styles.studentSubtitleStyle}>
                Teléfono:
              </Text>
              <Text style={Styles.fullNameTextStyle}>
                {student.phone}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.deleteStudent(student.id)}
            >
              <Icon
                name="trash-o"
                color='#777777'
                size={25}
                style={Styles.menuButtonStyle}
              />
            </TouchableOpacity>
          </View>
        )
      });
    }
  }

  deleteStudent = (id) => {
    const { deleteStudentMutation } = this.props;
  }

  render() {
    const { studentsContainerStyle, horizontalContainer, containerStyle } = Styles;
    return (
      <View style={containerStyle}>
        <View style={studentsContainerStyle}>
          <MenuButton
            color='#1687c5'
            navigation={this.props.navigation}
          >
            Lista de estudiantes
        </MenuButton>
          <ScrollView style={horizontalContainer}>
            {this.displayStudentsDetails()}
          </ScrollView>
        </View >
      </View>
    );
  }
}

const Styles = {
  studentsContainerStyle: {
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 100
  },
  horizontalContainer: {
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  containerStyle: {
    alignItems: 'center'
  },
  studentFullNameStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  spinnerContainerStyle: {
    height: '100%',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingTop: 50
  },
  studentContainerStyle: {
    margin: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#1687c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullNameTextStyle: {
    color: '#1687c5',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },
  menuButtonStyle: {
    padding: 10,
  },
  studentSubtitleStyle: {
    color: '#1687c5',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center'
  },
}

export default compose(
  graphql(getStudentsQuery, { name: "getStudentsQuery" }),
  graphql(deleteStudentMutation, { name: "deleteStudentMutation" })
)(Assistants);