import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { WeatherContainer } from "../styles";
import WeatherGrid from "./WeatherGrid";
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
								{data.weather.map((info) => (
									<WeatherGrid info={info} />
								))}
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

export default WeatherData;
