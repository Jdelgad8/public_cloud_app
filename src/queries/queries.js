import { gql } from 'apollo-boost';

const getStudentsQuery = gql`
  {
    students{
      id
      full_name
      age
      email
      phone
    }
  }
`

const addStudentMutation = gql`
  mutation($full_name: String!, $age: String!, $email: String!, $phone: String!) {
    addStudent(full_name: $full_name, age: $age, email: $email, phone: $phone){
      id

    }
  }
`

const deleteStudentMutation = gql`
  mutation($id: ID!){
    deleteStudent(id: $id){
      id
    }
  }
`

export { getStudentsQuery, addStudentMutation, deleteStudentMutation };

