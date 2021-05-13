const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');
const { typeDefs } = require('./models');


const apolloServer = new ApolloServer({ 
	typeDefs, 
	resolvers,
});

apolloServer
.listen()
.then(({ url }) => console.log(`🚀 Apollo ready at ${url}`));