import React from "react";

const WeatherInfo = ({ location, system, date, icon, temp, weatherStatus }) => {
	return (
		<ul className="weather-info">
			<li className="location">
				{location}, {system}
			</li>
			<li className="date">{new Date(date * 1000).toDateString()}</li>
			<li className="icon">
				<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
			</li>
			<li className="temperature">{parseInt(temp)}&deg; F</li>
			<li className="weather-status">{weatherStatus}</li>
		</ul>
	);
};

export default WeatherInfo;
