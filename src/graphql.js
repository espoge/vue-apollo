import gql from 'graphql-tag'

export const ALL_USERS_QUERY = gql`query AllUsersQuery {
    allUsers {
        id
        firstname
        lastname
        job{
            description
        }
    }
}`

export const USER_QUERY = gql`query fetchUser($id: Int!) {
    fetchUser(id:$id){
        id
        firstname
        lastname
        job{ 
            description
        }
    }
}`