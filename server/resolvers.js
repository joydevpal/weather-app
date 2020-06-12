const fetchWeatherData = require("./fetchWeatherData");
module.exports = {
	Query: {
		weather: (_, { location }) => {
			return fetchWeatherData(location);
		},
	},
};
