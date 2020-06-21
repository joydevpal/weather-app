import React from "react";

const AdditionalInfo = ({ lat, lon, pressure, humidity, feelsLike, cloudiness, windSpeed }) => {
	return (
		<ul className="additional-info">
			<li className="coordinates">
				<img src="https://img.icons8.com/ios/50/ffffff/point-objects.png" alt="icon" />
				<span>Coordinates</span> {lat}, {lon}
			</li>
			<li className="pressure">
				<img src="https://img.icons8.com/ios/50/ffffff/barometer-gauge.png" alt="icon" />
				<span>Pressure</span> {pressure} hpa
			</li>
			<li className="humidity">
				<img src="https://img.icons8.com/ios/50/ffffff/wet.png" alt="icon" />
				<span>Humidity</span> {humidity} %
			</li>
			<li className="feels-like">
				<img src="https://img.icons8.com/ios/50/ffffff/temperature.png" alt="icon" />
				<span>Feels Like</span> {feelsLike}
				&deg; F
			</li>
			<li className="cloudiness">
				<img src="https://img.icons8.com/ios/50/ffffff/cloud.png" alt="icon" />
				<span>Cloudiness</span> {cloudiness} %
			</li>
			<li className="windspeed">
				<img src="https://img.icons8.com/ios/50/ffffff/wind.png" alt="icon" />
				<span>Wind Speed</span> {windSpeed} miles/hour
			</li>
		</ul>
	);
};

export default AdditionalInfo;
