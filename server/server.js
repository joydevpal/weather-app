const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");

const app = express();

var corsOptions = {
	origin: "http://localhost:3000",
	credentials: true,
};

app.use(cors(corsOptions));

app.use(
	"/graphql",
	expressGraphQL({
		schema,
		graphiql: true,
	})
);

app.listen(4000, () => {
	console.log("Server running on port 4000");
});
