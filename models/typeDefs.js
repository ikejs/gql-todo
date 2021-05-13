const { gql } = require('apollo-server');

module.exports = gql`
type Task {
  name: String!,
  completed: Boolean!
},

type Query {
  tasks: [Task]!
},

type Mutation {
  addTask(name: String!): [Task!]!
},
`;
