const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// start the server
server.listen().then(({ url }) => {
	console.log(`Server is ready at ${url}`);
});
