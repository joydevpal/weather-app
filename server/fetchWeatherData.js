const axios = require("axios");
const fetchWeatherData = async (location) => {
	const response = await axios.get("https://community-open-weather-map.p.rapidapi.com/find", {
		headers: {
			"x-rapidapi-host": process.env.RAPIDAPI_HOST,
			"x-rapidapi-key": process.env.RAPIDAPI_KEY,
		},
		params: {
			units: "imperial",
			q: location,
		},
	});

	// restructure API data
	const weatherArr = [];
	for (let res of response.data.list) {
		let formattedWeatherData = {
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
		weatherArr.push(formattedWeatherData);
	}
	return weatherArr;
};

module.exports = fetchWeatherData;
