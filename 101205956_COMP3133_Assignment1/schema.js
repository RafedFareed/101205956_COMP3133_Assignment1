const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    type Employee {
        id: ID!
        firstname: String!
        lastname: String!
        email: String!
        gender: String!
        salary: Float!
        username: String!
        password: String!
    }

    type Query {
        getEmployees: [Employee]
        getEmployeeByID(id: ID!): Employee
        getEmployeeByGender(gender: String!): [Employee]
    }

    type Mutation {
        addEmployee(firstname: String!
            lastname: String!
            email: String!
            gender: String!
            salary: Float!
            username: String!
            password: String!): Employee

        updateEmployee(id: String!
            firstname: String!
            lastname: String!
            email: String!
            gender: String!
            salary: Float!
            username: String!
            password: String!): Employee
        
        deleteEmployee(id: String!): Employee
    }
`