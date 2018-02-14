import gql from 'graphql-tag'

export const querySingleContact = gql`
        query contactQuery($id: ID){ 
           Contact(id: $id){
               id firstName lastName phoneNumber email message
           }
         }`


export const updateContact = gql`
        mutation (
            $id: ID!
            $firstName: String!
            $lastName: String!
            $phoneNumber: String!
            $email: String!
            $message: String
        ){
            updateContact(
                id: $id
                firstName: $firstName
                lastName: $lastName
                phoneNumber: $phoneNumber
                email: $email
                message: $message
            ){
                id
            }
        }`

export const deleteContact = gql`
        mutation(
        $id: ID!
        ){
          deleteContact(id: $id){
            id
          }
        }`

