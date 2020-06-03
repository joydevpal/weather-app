const axios = require("axios");
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
	GraphQLFloat,
} = require("graphql");

const WeatherType = new GraphQLObjectType({
	name: "Weather",
	fields: () => ({
		id: { type: GraphQLString },
		location: { type: GraphQLString },
		system: { type: GraphQLString },
		date: { type: GraphQLString },
		lat: { type: GraphQLFloat },
		lon: { type: GraphQLFloat },
		pressure: { type: GraphQLInt },
		weatherStatus: { type: GraphQLString },
		humidity: { type: GraphQLFloat },
		feelsLike: { type: GraphQLFloat },
		temp: { type: GraphQLFloat },
		cloudiness: { type: GraphQLInt },
		windSpeed: { type: GraphQLFloat },
		icon: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: () => ({
		weather: {
			type: new GraphQLList(WeatherType),
			args: { location: { type: GraphQLString } },
			async resolve(parentValue, args) {
				const response = await axios.get(
					"https://community-open-weather-map.p.rapidapi.com/find",
					{
						headers: {
							"x-rapidapi-host": process.env.RAPIDAPI_HOST,
							"x-rapidapi-key": process.env.RAPIDAPI_KEY,
						},
						params: {
							units: "imperial",
							q: args.location,
						},
					}
				);

				const weatherArr = [];
				for (let res of response.data.list) {
					let newObj = {
						id: res.id,
						location: res.name,
						system: res.sys.country,
						date: res.dt,
						lat: res.coord.lat,
						lon: res.coord.lon,
						pressure: res.main.pressure,
						weatherStatus: res.weather[0].description,
						humidity: res.main.humidity,
						feelsLike: res.main.feels_like,
						temp: res.main.temp,
						cloudiness: res.clouds.all,
						windSpeed: res.wind.speed,
						icon: res.weather[0].icon,
					};
					weatherArr.push(newObj);
				}
				return weatherArr;
			},
		},
	}),
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
