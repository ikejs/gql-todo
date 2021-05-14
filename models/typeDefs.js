const { gql } = require('apollo-server');

module.exports = gql`
type Task {
  name: String!,
  completed: Boolean!,
  date: String,
  id: String,
},

type Query {
  getAllTodos: [Task]!
  getTodo(id: String): Task!
  getSortedTodos(completed: Boolean!): [Task]!
},

type Mutation {
  addTask(name: String!): [Task!]!
  completeTodo(id: String!): [Task!]!
},
`;
