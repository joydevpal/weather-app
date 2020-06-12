const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		weather(location: String): [Weather]
	}
	type Weather {
		id: ID
		location: String
		system: String
		date: String
		lat: Float
		lon: Float
		pressure: Int
		weatherStatus: String
		humidity: Float
		feelsLike: Float
		temp: Float
		cloudiness: Int
		windSpeed: Float
		icon: String
	}
`;

module.exports = typeDefs;
