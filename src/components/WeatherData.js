import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const WeatherData = ({ location }) => {
	return (
		<Query query={GET_WEATHER_DATA} variables={{ location }}>
			{({ loading, error, data }) => {
				if (loading) return null;
				if (error) return `Error! ${error}`;

				if (data.weather.length === 0) {
					return <h2>No weather info found for your city.</h2>;
				}

				return (
					<WeatherContainer>
						<Container maxWidth="md" style={{ marginTop: "50px" }}>
							<Grid container justify="center" spacing={3}>
								{data.weather.map(
									({
										id,
										location,
										system,
										date,
										icon,
										temp,
										weatherStatus,
										lat,
										lon,
										pressure,
										humidity,
										feelsLike,
										cloudiness,
										windSpeed,
									}) => (
										<Grid item md={4} key={id} className="weather-info-grid">
											<Paper>
												<ul className="weather-info">
													<li className="location">
														{location}, {system}
													</li>
													<li className="date">
														{new Date(date * 1000).toDateString()}
													</li>
													<li className="icon">
														<img
															src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
															alt="icon"
														/>
													</li>
													<li className="temperature">
														{parseInt(temp)}&deg; F
													</li>
													<li className="weather-status">
														{weatherStatus}
													</li>
												</ul>
												<ul className="additional-info">
													<li className="coordinates">
														<img
															src="https://img.icons8.com/ios/50/ffffff/point-objects.png"
															alt="icon"
														/>
														<span>Coordinates</span> {lat}, {lon}
													</li>
													<li className="pressure">
														<img
															src="https://img.icons8.com/ios/50/ffffff/barometer-gauge.png"
															alt="icon"
														/>
														<span>Pressure</span> {pressure} hpa
													</li>
													<li className="humidity">
														<img
															src="https://img.icons8.com/ios/50/ffffff/wet.png"
															alt="icon"
														/>
														<span>Humidity</span> {humidity} %
													</li>
													<li className="feels-like">
														<img
															src="https://img.icons8.com/ios/50/ffffff/temperature.png"
															alt="icon"
														/>
														<span>Feels Like</span> {feelsLike}
														&deg; F
													</li>
													<li className="cloudiness">
														<img
															src="https://img.icons8.com/ios/50/ffffff/cloud.png"
															alt="icon"
														/>
														<span>Cloudiness</span> {cloudiness} %
													</li>
													<li className="windspeed">
														<img
															src="https://img.icons8.com/ios/50/ffffff/wind.png"
															alt="icon"
														/>
														<span>Wind Speed</span> {windSpeed}{" "}
														miles/hour
													</li>
												</ul>
											</Paper>
										</Grid>
									)
								)}
							</Grid>
						</Container>
					</WeatherContainer>
				);
			}}
		</Query>
	);
};

const GET_WEATHER_DATA = gql`
	query WeatherData($location: String!) {
		weather(location: $location) {
			id
			location
			system
			date
			lat
			lon
			weatherStatus
			pressure
			humidity
			feelsLike
			temp
			cloudiness
			windSpeed
			icon
		}
	}
`;

const WeatherContainer = styled.div`
	.MuiPaper-root {
		background: linear-gradient(to bottom, #122259 0%, #9662a2 100%);
		padding: 25px;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		color: #fff;
	}
	.location {
		font-size: 24px;
		font-weight: 700;
		line-height: 30px;
	}
	.date {
		font-weight: 500;
	}
	.temperature {
		font-size: 30px;
		font-weight: 700;
	}
	.additional-info {
		overflow: hidden;
		margin-left: -10px;
	}
	.additional-info li {
		width: calc(50% - 10px);
		float: left;
		color: #fff;
		background: rgba(255, 255, 255, 0.2);
		margin-left: 10px;
		margin-bottom: 10px;
		text-align: center;
		font-size: 12px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.additional-info li img {
		max-height: 30px;
		margin-bottom: 7px;
	}
	.weather-status {
		text-transform: capitalize;
		font-size: 18px;
		margin-bottom: 15px;
	}
`;

export default WeatherData;
